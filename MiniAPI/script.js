let weatherInfoDiv = document.getElementById("weatherInfo");

fetch("https://goweather.herokuapp.com/weather/Kathmandu")
.then((response) => response.json())
.then((data) => {
    console.log(data); // for debugging

    // Display in the div
    weatherInfoDiv.innerHTML = `
        <p><strong>Temperature:</strong> ${data.temperature}</p>
        <p><strong>Wind:</strong> ${data.wind}</p>
        <p><strong>Description:</strong> ${data.description}</p>
    `;
})
.catch((error) => {
    weatherInfoDiv.innerHTML = "Failed to fetch weather data.";
    console.error("Error fetching weather:", error);
});
