// Import the database connection
require('./models/db'); 
// Import the student controller
const studentController = require('./controllers/studentController'); 

// Import required modules
const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const { engine } = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyParser = require('body-parser');

// Initialize Express app
var app = express();
PORT = 3000;

// Middleware to parse URL-encoded and JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Home route
app.get('/', (req, res) => {
    res.send(`<h1> Welcome to the Express App</h1> <h2>Click here to get access to<b> <a href="/student/list">Database</a></b></h2>`);
});

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Configure Handlebars as the view engine
app.engine('hbs', engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: '.hbs',
    defaultLayout: 'MainLayout',
    layoutsDir: __dirname + '/views/layouts'
}));
app.set('view engine', 'hbs');

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Use the student controller for all /student routes
app.use('/student', studentController); 