import pymongo
import json, os
from dotenv import load_dotenv
from pymongo import MongoClient, InsertOne

load_dotenv()

MONGO_URI = os.getenv('MONGO_URI')

client = pymongo.MongoClient(MONGO_URI)
db = client.<DATABASE>
collection = db.<COLLECTION>
requesting = []

with open(r"<FILENAME>") as f:
    for jsonObj in f:
        myDict = json.loads(jsonObj)
        requesting.append(InsertOne(myDict))

result = collection.bulk_write(requesting)
client.close()