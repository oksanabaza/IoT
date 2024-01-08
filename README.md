# WeatherTop

**Student Name:** Oksana Bazylieva  
**Student ID:** 20104122

**Website:** https://clover-ruby-mojoceratops.glitch.me/

## Project Overview

WeatherTop is a local weather station project designed to gather real-time environmental data, including temperature, pressure, and humidity, using a Raspberry Pi. The project utilizes Firebase for cloud-based storage, enabling seamless data retrieval and presentation on a frontend interface. Additionally, a Linux cron job ensures that the Raspberry Pi script runs automatically every time the device is powered on, ensuring continuous and autonomous data collection.

## Tools, Technologies, and Equipment

### Sensors:
- Raspberry Pi Sensor Board: Measures temperature, pressure, and humidity in the surrounding environment.

### Programming Language:
- Python: Used for scripting the Raspberry Pi to interact with sensors and process data.

### Integrated Development Environment (IDE):
- Visual Studio Code: The chosen IDE for developing, testing, and debugging the Python code on the Raspberry Pi.

### Cloud Platform:
- Firebase: Provides a robust cloud platform for storing and managing real-time environmental data collected by the WeatherTop station.

## [GitHub Repository](https://github.com/oksanabaza/IoT)

## Project Components and Functionality

### Raspberry Pi Scripting (Python):
- Utilizes Python for interacting with the Raspberry Pi Sensor Board.
- Gathers real-time data on temperature, pressure, and humidity from the sensors.

### Firebase Integration:
- Connects to Firebase for storing and managing real-time environmental data.
- Enables secure and scalable cloud storage of the collected data.

### Frontend Interface:
- Develops a frontend interface for users to monitor real-time environmental parameters.
- Displays current temperature, pressure, and humidity values.

### Cron Job:
- Sets up a Linux cron job to automatically run the Raspberry Pi script on device startup.
- Ensures continuous data collection without manual intervention.

## Usage Scenario

**Automatic Data Collection:**
- The Linux cron job initiates the WeatherTop script on Raspberry Pi startup.
- Real-time environmental data, including temperature, pressure, and humidity, is sent to Firebase.

**Firebase Data Storage:**
- Firebase securely stores and manages the real-time data collected by the WeatherTop station.

**Frontend Monitoring:**
- Users access the frontend interface to monitor current environmental parameters.
- The interface provides a user-friendly display of temperature, pressure, and humidity values.
