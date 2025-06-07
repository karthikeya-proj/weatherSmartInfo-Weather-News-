# WeatherSmartInfo — Weather & News Web Application

##  Project Overview

**WeatherSmartInfo** is a Web Application (Frontend,Backend,External APIs,API Testing) that provides real-time weather updates and latest news headlines. It fetches weather data from **OpenWeatherMap API** and news data from **MediaStack News API**, offering a sleek and responsive user experience.

**Live demo** - (https://smartweatherinfo-karthikeya-proj.netlify.app/)

---
#
## 🛠️ Technologies & Tools Used



| Name           | Image                                   | One-line Description                                      |
|----------------|------------------------------------------|-----------------------------------------------------------|
| **Python**     | ![Python](https://img.icons8.com/color/48/python.png) | Backend programming language using FastAPI                |
| **FastAPI**    |  ⚡ | Lightweight Python web framework for building APIs       |
| **JavaScript** | ![JavaScript](https://img.icons8.com/color/48/javascript.png) | Frontend scripting to handle API calls and DOM updates   |
| **HTML**       | ![HTML](https://img.icons8.com/color/48/html-5.png) | Structure of the frontend interface                       |
| **CSS**        | ![CSS](https://img.icons8.com/color/48/css3.png) | Styling the frontend with modern, responsive design       |
| **Postman**    |  📮  | Used for testing and verifying backend API endpoints      |
| **GitHub**     | ![GitHub](https://img.icons8.com/ios-filled/50/github.png) | Repository for version control and project hosting        |
| **OpenWeather API** | 🌦️ | API used to fetch real-time weather information           |
| **Mediastack API**  | 📰 | API used to retrieve latest news headlines by country      |
| **Render** | Render | Backend deployment and hosting platform                    |
| **Netlify** | Netlify | Frontend deployment and hosting platform                   |

---
#
## 🧰 APIs Used

| API               | Purpose        | Documentation                                |
|-------------------|----------------|----------------------------------------------|
| OpenWeatherMap    | Weather data   | https://openweathermap.org/api                |
| MediaStack News   | News headlines | https://mediastack.com/documentation          |

---

#

# 📬 API Testing with Postman

Postman was used to test and verify the backend endpoints before connecting them to the frontend. This ensured that all API responses were structured correctly and handled errors properly.

---


###   Authorization or Headers

- No authentication required (open public APIs).
- Ensure your `.env` file contains the actual API keys for weather and news during local testing.

---

### Why Postman Was Used

- To test backend API endpoints without using the frontend.
- To check error handling (e.g., invalid city or country inputs).
- To preview raw JSON responses and fix logic before integrating with the frontend.

## How Postman Was Used

### ✅ 1. Test the Weather API

- **Method:** GET  
- **URL:**  http://127.0.0.1:8000/weather?city=Hyderabad


 **Steps:**

 1. Open Postman.  
2. Select **GET** method.  
3. Enter the URL with the city query parameter.  
4. Click **Send**.

**Expected JSON response:**
{
"city": "Hyderabad",
"temperature": 32.5,
"description": "clear sky",
"humidity": 54,
"wind_speed": 3.2
}


---

### ✅ 2. Test the News API

- **Method:** GET  
- **URL:**  http://127.0.0.1:8000/news?country=in

**Steps:**

1. Open Postman.  
2. Select **GET** method.  
3. Enter the URL with country code parameter.  
4. Click **Send**.

**Expected JSON response:**
{
"top_headlines": [
"India launches new space mission...",
"Economy shows signs of recovery...",
...
]
}

#


## </>Setup & Installation

1. **Clone the repository**

- git clone https://github.com/karthikeya-proj/weatherSmartInfo-Weather-News-.git
- cd weatherSmartInfo-Weather-News-


2. **Create and activate virtual environment**

- python -m venv venv
- source venv/bin/activate # Linux/macOS
- venv\Scripts\activate # Windows


3. **Install dependencies**

- pip install -r requirements.txt


4. **Create `.env` file (in root directory)**

- WEATHER_API_KEY=your_openweathermap_api_key_here
- MEDIASTACK_API_KEY=your_mediastack_api_key_here


5. **Run FastAPI backend**

- uvicorn app.main:app --reload


6. **Open frontend/index.html in browser**

---

## Usage

- Enter a city name to get current weather (temperature, humidity, wind speed, description).
- Enter a country code (e.g., `us`, `in`) to get top 10 latest news headlines.
- Results display dynamically on the page without reload.

---

## 🔧 Commands Reference

| Command                                | Description                          |
|---------------------------------------|------------------------------------|
| `git clone <repo-url>`                 | Clone the GitHub repo               |
| `python -m venv venv`                  | Create virtual environment          |
| `source venv/bin/activate`             | Activate venv (Linux/macOS)         |
| `venv\Scripts\activate`                | Activate venv (Windows)             |
| `pip install -r requirements.txt`     | Install Python dependencies         |
| `uvicorn app.main:app --reload`        | Run FastAPI backend with hot reload |
| `git add .`                           | Stage changes for commit            |
| `git commit -m "message"`             | Commit changes                     |
| `git push origin main`                 | Push changes to GitHub repo         |

---

## Deployment URLs

| Purpose                   | URL                                                         |
|---------------------------|-------------------------------------------------------------|
| Frontend Deployment (Netlify) | https://smartweatherinfo-karthikeya-proj.netlify.app/     |
| Backend Deployment (Render)    | https://weathersmartinfo.onrender.com                      |
