# 🚀 Task Management System

A full-stack Task Management System built with **Node.js, Express.js, MongoDB, and Vanilla JavaScript**. The application provides secure user authentication using JWT stored in HttpOnly cookies, Google OAuth login, password reset via OTP, and account-specific task management.

---

## 📸 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Authentication using HttpOnly Cookies
- Google OAuth Login
- Protected Routes
- User Logout
- User Profile
- Forgot Password
- OTP Verification
- Reset Password

### ✅ Task Management
- Create Tasks
- View All Tasks
- Update Tasks
- Delete Tasks
- Toggle Task Completion
- Set Priority (Low, Medium, High)
- Due Date Support
- User-specific Tasks (Each user can only access their own tasks)

### 🛡️ Security
- Password Hashing using bcrypt
- JWT Authentication
- HttpOnly Cookies
- Helmet Security Middleware
- Rate Limiting
- Input Validation
- Centralized Error Handling
- Secure Environment Variables

---

# 🛠 Tech Stack

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js
- JWT (jsonwebtoken)
- bcrypt
- express-session
- connect-mongo
- cookie-parser
- helmet
- express-rate-limit
- Morgan

## Frontend

- HTML5
- CSS3
- Vanilla JavaScript

---

# 📂 Project Structure

```
task-management-system
│
├── config
│   └── passport.js
│
├── controllers
│   ├── authController.js
│   └── todoController.js
│
├── middleware
│   ├── errorHandler.js
│   └── verifyToken.js
│
├── models
│   ├── User.js
│   └── Todo.js
│
├── public
│   ├── dashboard.html
│   ├── dashboard.js
│   ├── dashboard.css
│   ├── login.html
│   ├── signup.html
│   ├── forgot-password.html
│   ├── verify-otp.html
│   ├── reset-password.html
│   ├── style.css
│   └── ...
│
├── routes
│   ├── authRoutes.js
│   └── todoRoutes.js
│
├── server.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/task-management-system.git
```

### Navigate into Project

```bash
cd task-management-system
```

### Install Dependencies

```bash
npm install
```

### Create .env file

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

SESSION_SECRET=your_session_secret

EMAIL_USER=your_email

EMAIL_PASS=your_email_password

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

FRONTEND_URL=http://localhost:5000
```

### Run the Server

```bash
npm start
```

or

```bash
npm run dev
```

---

# 📌 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/signup` | Register User |
| POST | `/login` | Login User |
| GET | `/profile` | Get Logged-in User |
| POST | `/logout` | Logout User |
| POST | `/forgetpassword` | Send OTP |
| POST | `/verifyotp` | Verify OTP |
| POST | `/resetpassword` | Reset Password |
| GET | `/auth/google` | Google OAuth Login |

---

## Todos

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/todos` | Get All User Todos |
| GET | `/api/todos/:id` | Get Todo by ID |
| POST | `/api/todos` | Create Todo |
| PUT | `/api/todos/:id` | Update Todo |
| PATCH | `/api/todos/:id/toggle` | Toggle Todo Status |
| DELETE | `/api/todos/:id` | Delete Todo |

---

# 🔒 Authentication Flow

```
Signup
    ↓
Login
    ↓
JWT Generated
    ↓
HttpOnly Cookie
    ↓
Protected Routes
    ↓
Dashboard
    ↓
CRUD Operations
```

---

# 🎯 Key Learning Outcomes

- REST API Development
- MVC Architecture
- Authentication & Authorization
- JWT Authentication
- Google OAuth Integration
- Cookie-based Authentication
- MongoDB CRUD Operations
- Password Reset using OTP
- Middleware Development
- Error Handling
- Protected Routes
- Express.js Best Practices

---

# 🚀 Future Improvements

- Search Tasks
- Filter by Priority
- Sort Tasks
- Pagination
- Email Notifications
- User Profile Editing
- Dark Mode
- Responsive Mobile UI
- Unit & Integration Testing
- Docker Support

---

# 👨‍💻 Author

**Keyur Shah**

GitHub: https://github.com/keyur-con

LinkedIn: *(Add your LinkedIn profile here)*

---

# 📄 License

This project is developed for learning purposes and portfolio demonstration.




React + Node.js Screening Task

Backend Requirements

Build Express APIs:

• POST /login (fake JWT)

• GET /expenses (search, filter, pagination)

• POST /expenses

• PATCH /expenses/:id

• DELETE /expenses/:id


Rules:

• Use in-memory data or JSON file

• Validate input

• Proper HTTP status codes

• Error handling

• Expense amount must be positive.

• Approved expenses cannot be edited except status notes.

Frontend Requirements

Create:

• Login page

• Expense table

• Search

• Status filter

• Add expense form/modal

• Approve/Reject actions

• Delete action

• Loading & error states


Requirements:

• Refresh UI after CRUD operations

• Form validation

• Pagination or infinite scrolling

• Clean component structure

• Handle API failures gracefully.

Follow-up Change Requests

1. Add a department field and filtering.

2. Lock approved rows except comments.

3. Show total pending amount.
