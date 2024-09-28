
from flask import Flask, request, jsonify
import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

api_key=os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=api_key)
stock_recommendations = []

def generate_stock_recommendations(amount, risk_level, additional_info):
    messages = [
        {
            "role": "system",
            "content": "You are a financial advisor helping a user choose stocks."
        },
        {
            "role": "user",
            "content": (
                f"A user wants to invest ${amount}. They have a risk tolerance of {risk_level} "
                f"on a scale of 1 to 10. {additional_info}. Based on these preferences, suggest "
                "a list of 100 stocks they should consider investing in. Provide the list of stock "
                "tickers separated by a comma. For example their format should look like this: MSFT, AAPL, AMZN and so on. No other text output"
            )
        }
    ]

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages,
        max_tokens=500,
        temperature=0.7
    )
    recommendations = response.choices[0].message.content.strip()

    return recommendations.split(", ")

@app.route('/api/recommendations', methods=['POST'])
def get_recommendations():
    global stock_recommendations
    data = request.json
    amount = data.get('amount')
    risk_level = data.get('risk_level')
    additional_info = data.get('additional_info', "")

    stock_recommendations = generate_stock_recommendations(amount, risk_level, additional_info)
    return jsonify({"recommendations": stock_recommendations})

@app.route('/api/next_stock', methods=['GET'])
def get_next_stock():
    global stock_recommendations
    if stock_recommendations:
        next_stock = stock_recommendations.pop(0)
        return next_stock, 200
    else:
        return jsonify({"message": "No more stocks left!"}), 404

if __name__ == '__main__':
    app.run()
