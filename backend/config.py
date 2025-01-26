import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv("MONGO_URI")
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Avoids unnecessary warnings