# INSERT AWS DATABASE INFO HERE. NEED TO INPUT DATABASE_URI INTO .ENV
import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv(
        'AWS_DATABASE_URL',
        'postgresql://username:password@aws-rds-endpoint/database_name'
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Avoids unnecessary warnings
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_secret_key')  # For sessions
