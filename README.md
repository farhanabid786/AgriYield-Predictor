# 🌱 AgriYield Predictor
### 🚜 AI-Powered Crop Yield Prediction & Forecasting Platform

<p align="center">

![Python](https://img.shields.io/badge/Python-3.14-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![Tailwind](https://img.shields.io/badge/TailwindCSS-UI-teal)
![Machine Learning](https://img.shields.io/badge/Machine%20Learning-RandomForest-orange)
![Time Series](https://img.shields.io/badge/Forecasting-Prophet-purple)
![Deployment](https://img.shields.io/badge/Deployment-Render%20%7C%20Vercel-black)

</p>

---

# Main Github Repository :- https://github.com/springboardmentor789r/AgriYield

---

# 🎬 Project Demo

<p align="center">

[![AgriYield Predictor Demo](https://img.youtube.com/vi/5UqpzGgKfBg/maxresdefault.jpg)](https://youtu.be/5UqpzGgKfBg)

</p>

▶ Click the image above to watch the full demo of the AgriYield Predictor web application.
---

# 🚀 Live Application

| Service | Link |
|------|------|
| 🌐 Frontend | https://agriyield-predictor-system.vercel.app |
| ⚙ Backend API | https://agriyield-backend-c5nc.onrender.com |
| 📊 API Docs | https://agriyield-backend-c5nc.onrender.com/docs |

---

# 🌾 Project Overview

AgriYield Predictor is a **Full Stack AI application** that helps predict crop production using **soil characteristics and environmental conditions**.

The system integrates:

- **Machine Learning (Random Forest)**
- **Time Series Forecasting (Prophet)**
- **Interactive Data Visualization**
- **Cloud Deployment**

to deliver **data-driven agricultural insights**.

---

# 🧠 Key Features

| Feature | Description |
|------|------|
| 🎯 Crop Yield Prediction | Random Forest model predicts crop yield |
| 📈 Time Series Forecast | Prophet model forecasts yield trends |
| 🌦 Climate Inputs | Temperature, Humidity, Wind Speed |
| 🌱 Soil Analysis | Soil Type, Soil pH, Soil Quality |
| 📊 Visual Insights | Dynamic charts using Chart.js |
| 🌐 Full Stack | React + FastAPI |
| 📱 Responsive UI | Mobile friendly interface |

---

# 📊 Machine Learning Pipeline

```mermaid
flowchart LR

A[Raw Dataset] --> B[Data Cleaning]

B --> C[Feature Engineering]

C --> D[Encoding & Scaling]

D --> E[Random Forest Model]

D --> F[Prophet Time Series Model]

E --> G[Yield Prediction]

F --> H[Yield Forecast]

G --> I[API Response]

H --> I
```

---

# 🧬 Machine Learning Models

| Model | Purpose | Performance |
|------|------|------|
| Random Forest Regressor | Predict crop yield | R² Score > **0.95** |
| Prophet | Forecast future yield | Stable trend prediction |

---

# 📊 Forecast Visualization

Example output chart:

<p align="center">

<img src="https://quickchart.io/chart?c={type:'line',data:{labels:['Day1','Day2','Day3','Day4'],datasets:[{label:'Predicted Yield',data:[3.2,3.4,3.7,3.6]}]}}">

</p>

*(Your app generates charts like this dynamically using Chart.js)*

---

# 🌍 System Architecture

```mermaid
graph TD

User --> Frontend[React + Tailwind UI]

Frontend -->|REST API| Backend[FastAPI]

Backend --> RandomForest[ML Model]

Backend --> Prophet[Time Series Model]

RandomForest --> Prediction

Prophet --> Forecast

Prediction --> Frontend

Forecast --> Frontend
```

---

# 🧩 Technology Stack

## 🔙 Backend

| Technology | Purpose |
|------|------|
| Python | Core backend |
| FastAPI | REST API framework |
| Scikit-learn | Machine Learning |
| Prophet | Time Series Forecast |
| Pandas / NumPy | Data Processing |
| Joblib | Model Serialization |

---

## 🎨 Frontend

| Technology | Purpose |
|------|------|
| React.js | Frontend framework |
| Tailwind CSS | Styling |
| Axios | API communication |
| Chart.js | Data visualization |
| React Router | Navigation |

---

# 📂 Project Structure

```
AgriYield-Predictor
│
├── backend
│   ├── main.py
│   ├── SavedModel.pkl
│   ├── prophet_model.pkl
│   ├── prophet_scaler.pkl
│   ├── featuresaved.pkl
│   ├── requirements.txt
│   └── Procfile
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   │   ├── Predict.jsx
│   │   │   └── Forecast.jsx
│   │   ├── components
│   │   └── api.js
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/farhanabid786/AgriYield-Predictor.git

cd AgriYield-Predictor
```

---

## 2️⃣ Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs on

```
http://localhost:8000
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# ☁ Deployment

| Component | Platform |
|------|------|
| Frontend | Vercel |
| Backend | Render |
| Model Storage | Google Drive |

---

# 📈 Example Prediction Flow

```
User Inputs Data
        ↓
Frontend Sends API Request
        ↓
FastAPI Backend Processes Input
        ↓
Random Forest Predicts Yield
        ↓
Prophet Forecasts Trend
        ↓
Results Returned to UI
        ↓
Charts & Metrics Displayed
```

---

# 🔮 Future Enhancements

🚀 Real-time weather integration  
🚀 Satellite-based crop monitoring  
🚀 Farmer dashboard analytics  
🚀 Multi-region agricultural predictions  
🚀 Mobile app version  

---

# 🏆 Internship Project

Developed as part of:

**Infosys Springboard Virtual Internship 6.0**

Theme: **AI in Agriculture**

---

# 👨‍💻 Author

**Farhan Abid**

📧 Email  
f.abid.work@gmail.com  

🔗 LinkedIn  
http://www.linkedin.com/in/farhan-abid-8001a9253  

🐙 GitHub  
http://github.com/farhanabid786  

---

# ⭐ Support

If you like this project:

⭐ Star the repository  
🍴 Fork it  
🤝 Contribute improvements

---

# 📜 License

© 2025 Farhan Abid  
All rights reserved.



