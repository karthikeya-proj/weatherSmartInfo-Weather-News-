const backendUrl = "http://127.0.0.1:8000";

// Show/hide loading spinner
function showSpinner(show) {
  const spinner = document.getElementById("loadingSpinner");
  if (spinner) spinner.style.display = show ? "block" : "none";
}

// Fetch weather data & update UI + save city
async function fetchWeather(city) {
  const weatherDiv = document.getElementById("weatherResult");
  showSpinner(true);
  weatherDiv.textContent = "";

  if (!city) {
    showSpinner(false);
    weatherDiv.textContent = "Oops! Please enter a valid city name.";
    return;
  }

  try {
    const response = await fetch(`${backendUrl}/weather?city=${encodeURIComponent(city)}`);
    const data = await response.json();
    showSpinner(false);

    if (data.error) {
      weatherDiv.textContent = data.error;
    } else {
      weatherDiv.innerHTML = `
        <strong>City:</strong> ${data.city} <br/>
        <strong>Temperature:</strong> ${data.temperature} °C <br/>
        <strong>Description:</strong> ${data.description} <br/>
        <strong>Humidity:</strong> ${data.humidity}% <br/>
        <strong>Wind Speed:</strong> ${data.wind_speed} m/s
      `;
      localStorage.setItem("lastCity", city);
    }
  } catch (error) {
    showSpinner(false);
    weatherDiv.textContent = "Sorry, we couldn't fetch weather data right now. Please try again later.";
  }
}

// Fetch news data & update UI + save country
async function fetchNews(country) {
  const newsDiv = document.getElementById("newsResult");
  showSpinner(true);
  newsDiv.textContent = "";

  if (!country) {
    showSpinner(false);
    newsDiv.textContent = "Oops! Please enter a valid country code.";
    return;
  }

  try {
    const response = await fetch(`${backendUrl}/news?country=${encodeURIComponent(country)}`);
    const data = await response.json();
    showSpinner(false);

    if (data.error) {
      newsDiv.textContent = data.error;
    } else if (!data.top_headlines || data.top_headlines.length === 0) {
      newsDiv.textContent = "No headlines found.";
    } else {
      newsDiv.innerHTML = "<ul>" + data.top_headlines.map(headline => `<li>${headline}</li>`).join("") + "</ul>";
      localStorage.setItem("lastCountry", country);
    }
  } catch (error) {
    showSpinner(false);
    newsDiv.textContent = "Sorry, we couldn't fetch news data right now. Please try again later.";
  }
}

// Dark mode toggle setup
const toggleBtn = document.getElementById("darkModeToggle");

function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
  localStorage.setItem("theme", theme);
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

// Load saved city, country, and theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedCity = localStorage.getItem("lastCity");
  const savedCountry = localStorage.getItem("lastCountry");
  const savedTheme = localStorage.getItem("theme") || "light";

  setTheme(savedTheme);

  if (savedCity) {
    document.getElementById("cityInput").value = savedCity;
    fetchWeather(savedCity);
  }
  if (savedCountry) {
    document.getElementById("countryInput").value = savedCountry;
    fetchNews(savedCountry);
  }
});

// Button event listeners to trigger fetch calls
document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  fetchWeather(city);
});

document.getElementById("getNewsBtn").addEventListener("click", () => {
  const country = document.getElementById("countryInput").value.trim();
  fetchNews(country);
});
