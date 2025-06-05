# app/news.py

import requests
import os

API_KEY = os.getenv("MEDIASTACK_API_KEY") or "MEDIASTACK_API_KEY " # fallback key

def get_top_headlines(country: str = "in"):
    base_url = "http://api.mediastack.com/v1/news"
    
    params = {
        "access_key": API_KEY,
        "countries": country,
        "limit": 10,  # number of headlines
        "languages": "en",  # English only (optional)
        "sort": "published_desc"
    }

    try:
        response = requests.get(base_url, params=params)
        data = response.json()
        
        if "data" in data:
            headlines = [article["title"] for article in data["data"] if "title" in article]
            return {"top_headlines": headlines}
        else:
            return {"error": "No headlines found or API error."}
    
    except Exception as e:
        return {"error": str(e)}
