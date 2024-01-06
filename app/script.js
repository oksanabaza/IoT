// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkp9UnpW4Qm-WcXe26ADKajVKDE4ioXys",
  authDomain: "weather-accbe.firebaseapp.com",
  databaseURL: "https://weather-accbe-default-rtdb.firebaseio.com",
  projectId: "weather-accbe",
  storageBucket: "weather-accbe.appspot.com",
  messagingSenderId: "430839460245",
  appId: "1:430839460245:web:07a7b2172e36d71e2b869c"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Create weather database reference
const weatherRef = database.ref("weather");

// Sync on any updates to the weather DB. THIS CODE RUNS EVERY TIME AN 
UPDATE OCCURS ON THE DB.
weatherRef.on("value", function(snapshot) {
  document.getElementById("weatherData").innerHTML = ""; // Clear existing 
data

  snapshot.forEach(function(childSnapshot) {
    const temperature = childSnapshot.val()["temperature"];
    const humidity = childSnapshot.val()["humidity"];
    const pressure = childSnapshot.val()["pressure"];
    const time = childSnapshot.val()["timestamp"];

    // Display each record on your webpage
    const recordElement = document.createElement("div");
    recordElement.innerHTML = `
      <p>
        Temperature: ${temperature} °C<br>
        Humidity: ${humidity} %<br>
        Pressure: ${pressure} hPa<br>
        Data recorded at: ${time}
      </p>
      <hr>
    `;
    document.getElementById("weatherData").appendChild(recordElement);
  });
});

