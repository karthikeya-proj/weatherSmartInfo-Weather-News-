import os
from dotenv import load_dotenv

load_dotenv()  # Loads from .env file

WEATHER_API_KEY = os.getenv("WEATHER_API_KEY")
NEWS_API_KEY = os.getenv("NEWS_API_KEY")
