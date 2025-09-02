# backend/manual_verify.py
import sqlite3

# Path to your database
DATABASE = "tracker_db.db"

def verify_user(email_or_username):
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    # Update user to mark email as verified
    cursor.execute("""
        UPDATE users
        SET email_verified = 1, verification_token = NULL
        WHERE email = ? OR username = ?
    """, (email_or_username, email_or_username))

    conn.commit()
    if cursor.rowcount == 0:
        print("No user found with that email or username.")
    else:
        print(f"User '{email_or_username}' marked as verified successfully.")

    conn.close()

if __name__ == "__main__":
    user = input("Enter the email or username to verify: ").strip()
    verify_user(user)

