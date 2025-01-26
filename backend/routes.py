from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User, Listing

home_routes = Blueprint('home_routes', __name__)
user_routes = Blueprint('user_routes', __name__)

# Home page routing for all it needs upon API call
@home_routes.route('/')
def homepage():
  return "<p>Test route, this will prompt on the homepage</p>"

# Login for existing users
@user_routes.route('/login', methods = ['POST'])
def login():
      data = request.get_json()
      email = data.get('email')
      password = data.get('password')

      user = User.query.filter_by(email=email).first()
      if not user or not check_password_hash(user.password, password):
         return jsonify({'error': 'Invalid email or password'}), 401

      return jsonify({'message': f'Welcome back, {user.username}!'}), 200

# Signs user up for website
@user_routes.route('/signup')
def signup():
  data = request.get_json()
  username = data.get('username')
  email = data.get('email')
  password = data.get('password')

  # Check if the user already exists
  if User.query.filter((User.username == username) | (User.email == email)).first():
        return jsonify({'error': 'User already exists'}), 400
  
  # Hashes password (Might need to be reworked w/ Auth0)
  hashed_password = generate_password_hash(password)

  # Creates user
  new_user = User(username=username, email=email, password=hashed_password)
  db.session.add(new_user)
  db.session.commit()

  return jsonify({'message': 'User registered successfully'}), 201

# Retrieves user's info and pulls up their profile
@user_routes.route('/user/<int:id>', methods=['GET'])
def get_user_profile(id):
    user = User.query.get(id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    return jsonify({
        'id': user.id,
        'username': user.username,
        'email': user.email
    }), 200



