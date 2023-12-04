document.addEventListener("DOMContentLoaded", function () {
  // Fetch and display temperature
  fetchTemperature();

  // Fetch and display people count
  fetchPeopleCount();
});

// fungsi buat fetch temperature dari api thinkspeak

function fetchTemperature() {
  fetch("https://api.thingspeak.com/channels/2368152/feeds.json?api_key=PXOSLGK8AX6ZQ2PV&results=2")
      .then(response => response.json())
      .then(data => {
          const feeds = data.feeds;
          const latestTemperature = feeds[0]?.field1 || "N/A";
          document.getElementById("temperature").textContent = latestTemperature + " °C";
      })
      .catch(error => console.error("Error fetching temperature:", error));
}

// end fungsi buat fetch temperature dari api thinkspeak


// fungsi buat fetch motion dari api thinkspeak
function fetchPeopleCount() {
  fetch("https://api.thingspeak.com/channels/2368152/feeds.json?api_key=PXOSLGK8AX6ZQ2PV&results=2")
      .then(response => response.json())
      .then(data => {
          const feeds = data.feeds;
          const latestPeopleCount = feeds[0]?.field2 || "N/A";
          document.getElementById("peopleCount").textContent = latestPeopleCount;
      })
      .catch(error => console.error("Error fetching people count:", error));
}

