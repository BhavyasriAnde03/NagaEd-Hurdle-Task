// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000; // Define the port number

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS) from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample course data (to simulate a database)
let courses = [
    { id: 1, title: 'Course 1', description: 'Description for Course 1', duration: '10 hours' },
];

// API Endpoint to get all courses
app.get('/courses', (req, res) => {
    res.json(courses);
});

// API Endpoint to add a new course
app.post('/courses', (req, res) => {
    const newCourse = {
        id: courses.length + 1,
        ...req.body, // Spread the request body to get title, description, duration
    };
    courses.push(newCourse);
    res.json(newCourse); // Respond with the newly created course
});

// API Endpoint to update a course by ID
app.put('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id == req.params.id);
    if (course) {
        Object.assign(course, req.body); // Update the course with new data
        res.json(course); // Respond with the updated course
    } else {
        res.status(404).send('Course not found');
    }
});

// API Endpoint to delete a course by ID
app.delete('/courses/:id', (req, res) => {
    const index = courses.findIndex(c => c.id == req.params.id);
    if (index !== -1) {
        courses.splice(index, 1); // Remove the course from the array
        res.json({ message: 'Course deleted' }); // Confirmation message
    } else {
        res.status(404).send('Course not found');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
