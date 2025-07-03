# Student Management System (Node.js, Express, MongoDB, Handlebars)

This project is a simple Student Management System built with Node.js, Express, MongoDB (Mongoose), and Handlebars (hbs) as the view engine. It demonstrates CRUD (Create, Read, Update, Delete) operations for student records with a modern Bootstrap UI.

## Features
- Add, view, edit, and delete student records
- Responsive and modern UI using Bootstrap 5
- Uses MongoDB for data storage (via Mongoose)
- Handlebars for server-side rendering

## Project Structure
```
├── controllers/
│   └── studentController.js   # Express routes and logic for students
├── models/
│   ├── db.js                 # MongoDB connection setup
│   └── student.model.js      # Mongoose schema/model for students
├── views/
│   ├── layouts/
│   │   └── mainLayout.hbs    # Main Handlebars layout with Bootstrap
│   └── student/
│       ├── addOrEdit.hbs     # Add/Edit student form
│       └── list.hbs          # Student list view
├── index.js                  # Main Express app entry point
├── package.json              # Project dependencies
```

## How to Run
1. **Install dependencies:**
   ```
   npm install
   ```
2. **Start MongoDB** (make sure MongoDB is running on your system)
3. **Start the app:**
   ```
   node index.js
   ```
4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Usage
- Click "Add Student" to add a new student.
- View all students in the list.
- Edit or delete any student using the action buttons.

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- Handlebars (hbs)
- Bootstrap 5

## Author
- Mohammad Zakir Nozam

---
Feel free to customize and extend this project for your own needs!
