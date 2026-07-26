# 🚀 Page Pulse

Page Pulse is a full-stack web application that audits any website URL and generates a quick report containing important page information such as HTTP status, response time, page title, meta description, H1 count, images missing alt text, and approximate word count.

---

## ✨ Features

- 🌐 Analyze any public website URL
- ⚡ Measure response time
- 📄 Extract page title
- 📝 Extract meta description
- 🔠 Count H1 tags
- 🖼️ Count images missing `alt` attributes
- 📚 Estimate page word count
- ❌ Graceful error handling
  - Invalid URLs
  - Website unreachable
  - Request timeout
  - Non-HTML responses

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- Lucide React Icons

### Backend

- FastAPI
- Requests
- BeautifulSoup4
- lxml

---

## 📁 Project Structure

```text
page-pulse/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes.py
│   │   ├── parser.py
│   │   ├── models.py
│   │   └── utils.py
│   │
│   ├── requirements.txt
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── .gitignore
│
└── README.md
```

---

# ⚙️ Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Create a virtual environment.

```bash
python -m venv venv
```

Activate it.

Windows

```bash
venv\Scripts\activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Run the server.

```bash
uvicorn app.main:app --reload
```

Backend runs at

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

# ⚙️ Frontend Setup

Navigate to frontend.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Run the application.

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# 📡 API Contract

### Endpoint

```
POST /audit
```

### Request

```json
{
  "url": "https://example.com"
}
```

### Success Response

```json
{
  "status": 200,
  "response_time": 315,
  "title": "Example Domain",
  "meta_description": "Example website",
  "h1_count": 1,
  "images_missing_alt": 0,
  "word_count": 325
}
```

### Error Responses

Invalid URL

```json
{
  "detail": "Invalid URL"
}
```

Website Unreachable

```json
{
  "detail": "Website unreachable"
}
```

Timeout

```json
{
  "detail": "Request timed out"
}
```

Non HTML Response

```json
{
  "detail": "Only HTML pages are supported"
}
```

---

# 🧠 Design Decisions

### 1. FastAPI

FastAPI was selected because it provides automatic request validation using Pydantic, built-in interactive API documentation through Swagger, and excellent performance with minimal boilerplate.

---

### 2. BeautifulSoup

BeautifulSoup was used to parse HTML because it provides a simple and reliable way to extract page metadata, headings, images, and text content.

---

### 3. Modular Architecture

The backend was separated into routes, parser, models, and utility modules to improve readability, maintainability, and future scalability.

---

# 🧪 Testing

The application was tested for the following scenarios:

- Valid website URL
- Invalid URL
- Website unreachable
- Request timeout
- Non-HTML response
- Missing page title
- Missing meta description
- Images without alt attributes

---

# 🌍 Deployment

Frontend

- Vercel

Backend

- Render

---

# 📷 Demo

A Loom walkthrough demonstrates:

- Running the application
- Auditing a website
- Error handling
- Code structure
- Future improvements

---

# 🔮 Future Improvements

- SEO score calculation
- Performance metrics
- Page accessibility checks
- Multiple page crawling
- Audit history
- Export report as PDF
- Charts and analytics dashboard

---

# 👨‍💻 Author

Developed as part of the **Digital Heroes Training Task**.

---

## ❤️ Credit

**Built for Digital Heroes**

https://digitalheroesco.com
