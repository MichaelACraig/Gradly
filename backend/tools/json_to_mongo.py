import pymongo
import json
import os
from dotenv import load_dotenv
from pymongo import MongoClient, InsertOne

# Load environment variables
load_dotenv()

# Connect to MongoDB
MONGO_URI = os.getenv('MONGO_URI')
client = pymongo.MongoClient(MONGO_URI)
db = client.Database
collection = db.listingData
requesting = []

# Load JSON file as a single array
with open(r"backend/housing_subleases_with_images.json", "r") as f:
    data = json.load(f)  # Load the entire JSON array

# Create bulk insert requests
for entry in data:
    requesting.append(InsertOne(entry))

# Execute the bulk insert
result = collection.bulk_write(requesting)
print(f"Inserted {result.inserted_count} documents.")

# Close the connection
client.close()
