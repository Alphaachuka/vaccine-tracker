import sqlite3
import os

# Path to the database file (current folder)
db_path = os.path.join(os.path.dirname(__file__), "database.db")
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Check users
cursor.execute("SELECT id, username, email_verified, verification_token FROM users")
users = cursor.fetchall()
print(users)

conn.close()
