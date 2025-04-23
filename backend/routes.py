from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from pymongo import MongoClient
from datetime import datetime
import os, certifi

home_routes = Blueprint('home_routes', __name__)
user_routes = Blueprint('user_routes', __name__)

MONGO_URI = os.getenv('MONGO_URI')
client = MongoClient(MONGO_URI, tlsCAFile=certifi.where())

db = client['Database']
collection = db['listingData']

@home_routes.route("/listings", methods=["GET"])
def get_listings():
    try:
        listings = list(collection.find({}, {"_id": 0}))  # Exclude the MongoDB "_id" field
        return jsonify(listings), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Home page routing for all it needs upon API call
@home_routes.route('/')
def homepage():
  return "<p>Test route, this will prompt on the homepage</p>"

# Login for existing users
@user_routes.route('/login', methods = ['POST'])
def login():
  pass

# Signs user up for website
@user_routes.route('/signup')
def signup():
  pass

# Retrieves user's info and pulls up their profile
@user_routes.route('/user/<int:id>', methods=['GET'])
def get_user_profile(id):
  pass