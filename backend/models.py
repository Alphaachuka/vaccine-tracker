# backend/models.py
from db import get_db

def get_user_by_email(email):
    """
    Fetch a user by email.
    Returns a dictionary with user info or None if not found.
    """
    conn = get_db()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE email=%s", (email,))
    user = cursor.fetchone()
    cursor.close()
    conn.close()
    return user

def create_user(username, email, password):
    """
    Create a new user in the database.
    """
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO users (username, email, password) VALUES (%s, %s, %s)",
        (username, email, password)
    )
    conn.commit()
    cursor.close()
    conn.close()
