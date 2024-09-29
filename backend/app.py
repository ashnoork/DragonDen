from flask import Flask, request, jsonify
import os
from openai import OpenAI
from dotenv import load_dotenv
import threading
from conversationMain import interact_with_bird_by_id 

load_dotenv()

app = Flask(__name__)

api_key = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=api_key)
stock_recommendations = []

last_bird_id = None
current_bird_status = {}


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

@app.route('/api/notify_bird', methods=['POST'])
def notify_bird():
    data = request.json 
    bird_name = data.get('bird_name')

    if not bird_name:
        return jsonify({"error": "bird_name is required"}), 400

    current_bird_status['bird_name'] = bird_name
    current_bird_status['status'] = "speaking"

    return jsonify({"message": f"{bird_name} has started speaking!"}), 200

@app.route('/api/get_bird_status', methods=['GET'])
def get_bird_status():
    if 'bird_name' in current_bird_status:
        return jsonify({
            "bird_name": current_bird_status['bird_name'],
            "status": current_bird_status['status']
        }), 200
    else:
        return jsonify({"message": "No bird is currently speaking."}), 404

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

@app.route('/api/select_bird', methods=['POST'])
def select_bird():
    global last_bird_id

    data = request.json
    bird_id = data.get('bird_id')
    stock_ticker = data.get('stock_ticker', 'GOOGL')  

    if not bird_id or not isinstance(bird_id, int) or bird_id not in [1, 2, 3]:
        return jsonify({"error": "Invalid bird ID"}), 400

    if bird_id != last_bird_id:
        last_bird_id = bird_id  

        try:
            bird_thread = threading.Thread(target=interact_with_bird_by_id, args=(bird_id, stock_ticker))
            bird_thread.start()

            return jsonify({"message": f"Bird {bird_id} is speaking about {stock_ticker}!"}), 200

        except ValueError as e:
            return jsonify({"error": str(e)}), 400
    else:
        return jsonify({"message": f"Bird {bird_id} is already speaking about {stock_ticker}."}), 200

if __name__ == '__main__':
    app.run()
