# Responsive Course Table

Responsive Course Table is a React application that displays a responsive course table with information such as course names, instructors, duration, and more. The course data is fetched from a Node.js server, which serves the course details via an API. This app demonstrates how to fetch and display data from a server, manage responsive layouts, and use React for dynamic UI updates.

## Installation

Follow these steps to set up and run both the frontend and backend applications on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/ashikibrahim07/crypton-tech-assesment-by-ashik-ibrahim.git
cd crypton-tech-assesment-by-ashik-ibrahim/3. Responsive course tables
```

### 2. Install dependencies for the frontend

Navigate to the ResponsiveCourseTable folder and install the required dependencies for the React frontend:

```bash
cd courseApp/
npm install
```

### 3. Install dependencies for the backend (Node.js server)

Navigate to the CourseServer folder and install the required dependencies for the Node.js backend:

```bash
cd CourseServer
npm install
```

### 4. Start the backend server

Start the Node.js server, which will serve the course data:

```bash
node server.js
```

The server will be running on http://localhost:5000.

### 5. Start the frontend application

Navigate back to the frontend folder and run the React development server:

```bash
cd courseApp
npm run dev
```

This will start the React app locally on http://localhost:5173.

### 6. View the Application

Once both the frontend and backend servers are running, open your browser and visit http://localhost:5173 to view the responsive course table.
