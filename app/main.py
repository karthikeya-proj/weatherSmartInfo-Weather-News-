from fastapi import FastAPI
from app.weather import get_weather_by_city
from app.news import get_top_headlines
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware BEFORE route definitions
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or restrict to ["http://127.0.0.1:5500"] for frontend served by Live Server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Weather & News Chatbot API"}

@app.get("/weather/")
def weather(city: str):
    return get_weather_by_city(city)

@app.get("/news/")
def news(country: str = "in"):
    return get_top_headlines(country)
