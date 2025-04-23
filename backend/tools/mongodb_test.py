from pymongo import MongoClient
from dotenv import load_dotenv
import os
import certifi

# Load environment variables from .env file
load_dotenv()

# Get MongoDB URI from environment variables
mongo_uri = os.getenv("MONGO_URI")

try:
    # Connect to MongoDB Atlas with certifi for SSL verification
    client = MongoClient(mongo_uri, tlsCAFile=certifi.where())
    db = client['test']  # Replace 'test' with your database name
    collection = db['test_collection']  # Replace with your collection name

    # Test the connection by inserting a document
    collection.insert_one({"test": "data"})
    print("Connection successful!")
except Exception as e:
    print(f"Connection failed! Error: {e}")
finally:
    client.close()