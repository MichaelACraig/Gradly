from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

home_routes = Blueprint('home_routes', __name__)
user_routes = Blueprint('user_routes', __name__)

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



