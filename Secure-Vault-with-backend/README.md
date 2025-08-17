# 🔐 Secure Vault - Password Manager

A modern, secure password management application built with React frontend and Node.js backend, featuring MongoDB for data persistence.

## ✨ Features

- 🔒 Secure password storage and management
- 🎨 Modern, responsive UI built with React and Tailwind CSS
- 💾 MongoDB database integration
- 🔄 Real-time data synchronization
- 🎯 Toast notifications for user feedback


## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (running locally or accessible via connection string)

### 🎯 Frontend Setup

1. **Navigate to the project directory:**
   ```bash
   cd Secure-Vault-with-backend
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The application will be available at `http://localhost:5173` (or the port shown in your terminal)

### 🔧 Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy the `.env` file and update the MongoDB connection string if needed
   - Default configuration:
     ```
     MONGO_URI=mongodb://localhost:27017/
     DB_NAME=password_manager
     ```

4. **Start the backend server:**
   ```bash
   node server.js
   ```

5. **Verify the server is running:**
   The backend will be available at `http://localhost:3000`

### 🗄️ Database Setup

1. **Install MongoDB** (if not already installed):
   - [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/)

2. **Start MongoDB service:**
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   sudo systemctl start mongod
   ```

3. **Create database:**
   The application will automatically create the `password_manager` database when you first save a password.

## 📱 Available Scripts

### Frontend Scripts
- `npm run dev` - Start development server

### Backend Scripts
- `node server.js` - Start the backend server

## 🌐 API Endpoints

The backend provides the following REST API endpoints:

- `GET /` - Retrieve all passwords
- `POST /` - Save a new password
- `DELETE /` - Delete a password by ID

## 🛠️ Technologies Used

### Frontend
- **React 19** - Modern React with latest features
- **Tailwind CSS** - Utility-first CSS framework
- **React Toastify** - Toast notifications
- **UUID** - Unique identifier generation

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **CORS** - Cross-origin resource sharing
- **Body Parser** - Request body parsing middleware

## 🔧 Configuration

### Backend Configuration
- Environment variables in `.env` file
- MongoDB connection settings
- Server port configuration (default: 3000)


### Getting Help

If you encounter any issues:
1. Check the console for error messages
2. Verify all services are running (MongoDB, backend, frontend)
3. Ensure all dependencies are properly installed
4. Check environment variable configuration

## 📝 Development Notes

- The frontend runs on port 5173 (Vite default)
- The backend runs on port 3000
- MongoDB should be accessible on the default port 27017
- CORS is enabled for local development
- The application uses UUID v11 for password identification

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

---

**Happy coding! 🔐✨**
