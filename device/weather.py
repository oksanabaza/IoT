import firebase_admin
from firebase_admin import credentials, db
from sense_hat import SenseHat
import datetime
import time

cred = credentials.Certificate('./serviceAccountKey.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://weather-accbe-default-rtdb.firebaseio.com/'
})

ref = db.reference('/')
weather_ref = ref.child('weather')

sense = SenseHat()

def push_sensor_data():
    try:
        temperature = sense.get_temperature()
        humidity = sense.get_humidity()
        pressure = sense.get_pressure()

        current_time = datetime.datetime.now().strftime("%d/%m/%Y 
%H:%M:%S")

        # Print readings for debugging
        print(f"Temperature: {temperature} °C, Humidity: {humidity} %, 
Pressure: {pressure} hPa")

        # Push sensor data to Realtime DB
        weather_ref.push({
            'temperature': temperature,
            'humidity': humidity,
            'pressure': pressure,
            'timestamp': current_time
        })

    except Exception as e:
        print(f"Error reading sensor data: {e}")

if __name__ == "__main__":
    try:
        while True:
            # Push sensor data every 15 seconds
            push_sensor_data()

            # Wait for 15 seconds
            time.sleep(15)

    except KeyboardInterrupt:
        print("Script terminated by user.")
