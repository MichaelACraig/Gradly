from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Load .env and find your MongoDB URI
load_dotenv()
MONGO_URI = os.getenv("MONGO_URI")

def test_mongo_connection(uri):
    try:
        # Create a MongoDB client
        client = MongoClient(uri)
        
        # Get a list of databases
        databases = client.list_database_names()
        
        print("Connection successful!")
        print("Databases available:", databases)
        
        # Always close the connection after usage
        client.close()
    except Exception as e:
        print("Connection failed!")
        print(f"Error: {e}")

# Test the MongoDB connection
test_mongo_connection(MONGO_URI)
