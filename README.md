# 🚀 NASA Photo of the Day

Welcome to the **NASA Photo of the Day** web application! This project fetches and displays the NASA Astronomy Picture of the Day (APOD) based on the selected date. It's built using the **PERN** stack: **PostgreSQL, Express.js, React.js,** and **Node.js**., and integrates with the official NASA API.

---

## 🌟 Features

- Fetches NASA's Astronomy Picture of the Day (APOD) for any selected date.
- Displays the image along with the title and description.
- Fully interactive React-based user interface.
- Backend API powered by Node.js and Express.js.
- Responsive design with CSS and modern UI components.

---

## 📷 Screenshot

![NASA Photo of the Day Screenshot](public/images/screenshot.png)

---

## 🛠️ Technologies Used

- **React.js**: Frontend framework for building the user interface.
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for creating the API.
- **PostgresSQL**: Database for storing user preferences or logs (optional).
- **NASA API**: Fetches the APOD data.
- **CSS**: For styling the application.

---

## 🚀 Getting Started

Follow these steps to get the project up and running locally on your machine:

### 1. Clone the repository:

```bash
git clone https://github.com/meh636/Group-Project-Phase-2.git
```
### 2. Set up the backend (server):
```bash
cd nasa-photo-of-the-day/server
```
### 3. Install backend dependencies:
```bash
npm install
```
### 4. Set up the .env file with your NASA API key and daatabase credentials:
```bash
NASA_API_KEY=your_api_key_here
DATABASE_URL=your_postgres_connection_string_here
```
### 5. Run the backend server:
```bash
npm start
```

### 6. Set up the frontend (client):
```bash
cd ../client
```
### 7. Install frontend dependencies:
```bash
npm install
```
### 8. Run the frontend development server:
```bash
npm start
```
Access the app in your browser at http://localhost:3000

---

## 🛠 Development

You can develop the project by making changes to the code in the respective directories and running the development servers for both the backend and frontend.

---

## 📦 Deployment

The project can be deployed to a hosting platform like Heroku, Vercel, or Netlify. Make sure to configure the environment variables and database connections accordingly.

---

---

## 🌐 API Integration

This project uses NASA's APOD API to fetch the image and metadata for a specific date.

---

## 📂 Project Structure

```bash
nasa-photo-of-the-day/
│
├── /client/                # React frontend
│   ├── /public/            # Static assets (CSS, images)
│   ├── /src/               # React components and logic
│   ├── package.json        # Frontend dependencies
│   └── ...                 # Other React-related files
│
├── /server/                # Express backend
│   ├── app.js              # Main application file
│   ├── db.js               # PostgreSQL database connection
│   ├── package.json        # Backend dependencies
│   ├── .env                # Environment variables
│   └── ...                 # Backend-specific files
│
├── README.md               # Project documentation
└── .gitignore              # Ignore files like node_modules and .env
```

---

## 🚧 Future Improvments

- Add loading indicators while fetching data.
- Implement error handling for invalid or unavalible dates.
- Cache API responses to reduce network requests.
- Add user accounts and save favorite photos in the database.

---

## 📝 License

This project is liscenced under the MIT License.

---

## 💡 Acknowledgments

- Special thanks to NASA for providing the amazing APOD API.
- Huge appreciation to React, Node.js, and PostgreSQL for making this stack robust and scalable.

---

## ✨ Contributors

- Mary - Project Creator

Feel free to contribute! Submit a pull request or open an issue to improve the project. 
  


