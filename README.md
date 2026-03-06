# 📋 Task Management System

A full-stack task management app built with **Django REST Framework** and **React.js (Vite)**.

🔗 **Live Demo:** [task-management-system-g2ug.vercel.app](https://task-management-system-g2ug.vercel.app)  
🛠️ **API:** [task-management-system.up.railway.app/api/tasks/](https://task-management-system-production-88ad.up.railway.app/api/tasks/)

---

## 🗂️ Project Structure

```
TASK-MANAGEMENT-SYSTEM/
├── Backend/          ← Django REST API
│   ├── config/       ← Django project settings & URLs
│   ├── tasks/        ← Tasks app (models, views, serializers)
│   ├── manage.py
│   ├── requirements.txt
│   ├── Procfile
│   └── railway.json
└── frontend/         ← React + Vite app
    ├── src/
    │   ├── components/   ← TaskCard, TaskForm, FilterBar
    │   ├── services/     ← API calls (api.js)
    │   └── App.jsx
    ├── .env.production
    └── package.json
```

---

## ✨ Features

- ✅ Create, read, update, and delete tasks
- ✅ Filter tasks by status and priority
- ✅ One-click mark task as complete
- ✅ Animated task cards
- ✅ Dark theme UI with light task cards
- ✅ Responsive design (mobile friendly)
- ✅ No login required

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Vite, Plain CSS |
| Backend | Django, Django REST Framework |
| Database | PostgreSQL (production), SQLite (development) |
| Hosting | Vercel (frontend), Railway (backend + DB) |
| Version Control | Git + GitHub |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks/` | List all tasks |
| POST | `/api/tasks/` | Create a new task |
| GET | `/api/tasks/<id>/` | Get a single task |
| PUT | `/api/tasks/<id>/` | Update a task |
| DELETE | `/api/tasks/<id>/` | Delete a task |

### Task Object

```json
{
  "id": 1,
  "title": "My Task",
  "description": "Task description",
  "status": "pending",
  "priority": "medium",
  "due_date": "2026-03-31"
}
```

**Status choices:** `pending`, `completed`  
**Priority choices:** `regular`, `medium`, `high`

---

## 🚀 Local Setup

### Prerequisites
- Python 3.10+
- Node.js 18+
- npm

---

### Backend Setup

```bash
# 1. Go to the Backend folder
cd Backend

# 2. Create and activate virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # Mac/Linux

# 3. Install dependencies
pip install -r requirements.txt

# 4. Create a .env.local file in Backend/ and add:
SECRET_KEY=any-random-string-here
DEBUG=True

# 5. Run migrations
python manage.py migrate

# 6. Start the server
python manage.py runserver
```

Backend will be running at: `http://127.0.0.1:8000`

---

### Frontend Setup

```bash
# 1. Go to the frontend folder
cd frontend

# 2. Install dependencies
npm install

# 3. Create a .env.local file in frontend/ and add:
VITE_API_URL=http://127.0.0.1:8000/api

# 4. Start the dev server
npm run dev
```

Frontend will be running at: `http://localhost:5173`

---

## 🌍 Deployment

| Service | Platform | Config File |
|---|---|---|
| Backend | Railway | `railway.json`, `Procfile` |
| Frontend | Vercel | Auto-detected as Vite |
| Database | Railway PostgreSQL | `DATABASE_URL` env variable |

### Environment Variables

**Backend (Railway):**
| Variable | Description |
|---|---|
| `SECRET_KEY` | Django secret key |
| `DEBUG` | Set to `False` in production |
| `ALLOWED_HOSTS` | Your Railway domain |
| `DATABASE_URL` | PostgreSQL connection URL (auto-set by Railway) |
| `CORS_ALLOWED_ORIGINS` | Your Vercel frontend URL |

**Frontend (Vercel):**
| Variable | Description |
|---|---|
| `VITE_API_URL` | Your Railway backend API URL |

---

## 📦 Auto Deploy

Every push to the `main` branch on GitHub automatically:
- Redeploys the **frontend** on Vercel
- Redeploys the **backend** on Railway



---

## 👨‍💻 Author

**Chinmay** — [github.com/Chinmay2102](https://github.com/Chinmay2102)
