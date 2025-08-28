# Expense Tracker

A full-stack expense tracker application built with React (frontend) and Node.js/Express/MongoDB (backend).

## Prerequisites
- Node.js (v18 or higher recommended)
- npm (comes with Node.js)
- MongoDB (local or Atlas)

## Project Structure
```
EXPENSETRACKER/
├── backend/        # Node.js/Express/MongoDB API
├── frontend/       # React + Vite client
└── package.json    # Root dependencies (optional)
```

## Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in `backend/` with:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLIENT_URL=http://localhost:5173
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```
   The backend runs on `http://localhost:8000` by default.

## Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend/expense-tracker
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend dev server:
   ```sh
   npm run dev
   ```
   The frontend runs on `http://localhost:5173` by default.

## Dependencies
### Backend
- express
- mongoose
- dotenv
- cors
- jsonwebtoken
- bcryptjs
- multer
- xlsx
- nodemon (dev)

### Frontend
- react
- react-dom
- react-router-dom
- axios
- tailwindcss
- @tailwindcss/vite
- react-icons
- recharts
- moment
- emoji-picker-react
- react-hot-toast

## Usage
- Register a new user and log in.
- Add income and expense transactions.
- View dashboard, charts, and download Excel reports.

## Notes
- Make sure MongoDB is running and accessible.
- The backend expects JWT authentication for protected routes.
- Uploaded images are stored in `backend/uploads/`.

## Troubleshooting
- If you see CORS errors, check `CLIENT_URL` in `.env` and backend CORS config.
- If ports are busy, change them in the code or `.env`.

## License
MIT
