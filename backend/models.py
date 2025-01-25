from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(80), unique=True, nullable=False)
  email = db.Column(db.String(120), unique=True, nullable=False)
  password = db.Column(db.String(200), nullable=False)  # Hashed password

class Listing(db.Model):
  __tablename__ = 'listings'

  id = db.Column(db.Integer, primary_key = True)
  price = db.Column(db.String(80), unique=True, nullable=False)
  location = db.Column(db.String(80), unique=True, nullable=False)
  type = db.Column(db.String(80), unique=True, nullable=False) # Rental or Sublease
  property_image = db.Column(db.String(80), unique=True, nullable=False) # IDK What it's supposed to be yet

