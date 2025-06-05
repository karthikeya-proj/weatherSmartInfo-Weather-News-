# WeatherSmartInfo — Weather & News Web App

##  Project Overview

**WeatherSmartInfo** is a application that provides real-time weather updates and latest news headlines. It fetches weather data from **OpenWeatherMap API** and news data from **MediaStack News API**, offering a sleek and responsive user experience.

---

## 🛠️ Technologies & Tools Used

### Backend
- **Python 3.10+**
- **FastAPI** — lightweight web framework for building APIs
- **Requests** — HTTP library to call external APIs
- **APIs Used:**
  - OpenWeatherMap API (for weather data)
  - MediaStack News API (for news headlines)
- **Environment Variables:** API keys securely stored in `.env`

### Frontend
- **HTML5, CSS3** — structure and styling
- **Vanilla JavaScript (ES6+)** — client-side logic & API calls
- **Responsive design** with CSS media queries

### Tools
- **VSCode** — code editor
- **Git & GitHub** — version control and remote repo hosting
- **Postman** — API testing and debugging
- **Git Bash / Terminal** — Git commands execution

---


---

## ⚙️ Setup & Installation

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


6. **Open frontend/index.html in browser **

---

## 💻 Usage

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

## 🧰 APIs Used

| API               | Purpose        | Documentation                                |
|-------------------|----------------|----------------------------------------------|
| OpenWeatherMap    | Weather data   | https://openweathermap.org/api                |
| MediaStack News   | News headlines | https://mediastack.com/documentation          |

---


## 📸 Project Screenshots

![Weather UI](assets/image1.png)
![News UI](assets/image2.png)






