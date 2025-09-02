import os
from dotenv import load_dotenv
import mysql.connector
from mysql.connector import Error

# Load .env file
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), ".env"))

def get_db():
    try:
        connection = mysql.connector.connect(
            host=os.getenv("DB_HOST"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            database=os.getenv("DB_NAME")
        )
        return connection
    except Error as e:
        print(f"Error connecting to MySQL: {e}")
        raise e
