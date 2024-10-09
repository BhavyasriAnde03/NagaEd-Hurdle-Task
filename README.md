# NagaEd-Hurdle-Task


Project: Junior Software Developer Hurdle Task
Description:
This project consists of two parts:

1.Contact Us Form:
A simple web form built using HTML, CSS, and JavaScript. The form includes fields for a user's name, email, and message. It performs basic validation to ensure that the fields are filled in and the email is in the correct format. Upon submission, a success message is displayed, and the form data is logged to the browser console.

2.Simple RESTful API:
A basic API to manage a list of courses, allowing for CRUD (Create, Read, Update, Delete) operations. The API uses JSON to manage course data (course title, description, and duration) and provides endpoints to add, view, update, and delete courses.

Technologies Used:
Frontend: HTML, CSS, JavaScript
Backend: Node.js (or Python, depending on what you used)
Setup Instructions:
1. Clone the Repository:
To get a copy of the project up and running on your local machine:
git clone [your-repository-link]
cd [repository-folder-name]

2. Setting up the API (if using Node.js):
	1.Install Dependencies:
	Run the following command to install 	necessary packages:

	npm install

	2.Run the API:
	Start the API server by running:

	node api.js

	3.API Endpoints:

	GET /courses: Fetch all courses
	POST /courses: Add a new course (JSON format: id,title, description, duration)
	PUT /courses/: Update a course by ID
	DELETE /courses/: Delete a course by ID
	Accessing the API:
	The API will be accessible on 	http://localhost:3000 (or the port you have 	configured).

3. Running the Web Application:
To run the Contact Us form:

   Simply open the index.html file in your browser.
4. Testing the Application:
	Open the browser console (usually by right-	clicking on the page and selecting "Inspect" 	→ "Console").
	Fill in the form, submit it, and view the 	success message and logged data in the 	console.
Additional Notes:
Make sure Node.js is installed to run the backend API.
No database is used for this task; data is stored in-memory (JSON format).
