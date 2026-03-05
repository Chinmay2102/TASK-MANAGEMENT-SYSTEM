# Task Manager — Django Backend

REST API for a task management app built with Django REST Framework.

## Setup

1. Clone the repo
   git clone https://github.com/yourusername/task-manager-backend.git
   cd task-manager-backend

2. Create and activate virtual environment
   python -m venv venv
   venv\Scripts\activate

3. Install dependencies
   pip install -r requirements.txt

4. Create a .env file and add:
   SECRET_KEY=any-random-string
   DEBUG=True

5. Run migrations
   python manage.py migrate

6. Start the server
   python manage.py runserver