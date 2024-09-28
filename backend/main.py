import serial
import flask
import time
import threading

app = flask.Flask(__name__)
app.debug = True

ser = serial.Serial(port='/dev/cu.usbmodem101',baudrate=9600)
state = []

app.route('/getAction')
def getAction():
    global state
    res = flask.jsonify({state})
    return res


def read_serial():
    global state
    while True:
        value = ser.readline()
        valueInString = str(value, 'UTF-8')
        state = valueInString.split('#')
        state[1]=state[1].strip()
        print(state)

thread = threading.Thread(target=read_serial, daemon=True)
thread.start()

if __name__ == '__main__':
    app.run()