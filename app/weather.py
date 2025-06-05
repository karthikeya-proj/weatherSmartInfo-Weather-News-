# app/weather.py

import requests
import time
from app.config import WEATHER_API_KEY

# Simple in-memory cache dictionary
_weather_cache = {}
CACHE_EXPIRY_SECONDS = 600  # cache duration: 10 minutes

def get_weather_by_city(city: str):
    city_lower = city.lower()
    now = time.time()

    # Check cache
    if city_lower in _weather_cache:
        cached_data = _weather_cache[city_lower]
        if now - cached_data["timestamp"] < CACHE_EXPIRY_SECONDS:
            return cached_data["data"]

    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={WEATHER_API_KEY}&units=metric"
    response = requests.get(url)
    
    if response.status_code != 200:
        return {"error": "City not found or API error."}
    
    data = response.json()

    weather_data = {
        "city": data.get("name", city),
        "temperature": data["main"]["temp"],
        "description": data["weather"][0]["description"],
        "humidity": data["main"]["humidity"],
        "wind_speed": data["wind"]["speed"],
    }

    # Save to cache
    _weather_cache[city_lower] = {"data": weather_data, "timestamp": now}

    return weather_data
