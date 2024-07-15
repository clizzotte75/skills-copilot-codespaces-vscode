// create web server
const express = require('express');
const app = express();
const port = 3000;

// middleware
app.use(express.json());

// endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/comments', (req, res) => {
  console.log(req.body);
  res.send('POST request to the homepage');
});

// start web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Run the server, and open your browser to http://localhost:3000/. You should see the text Hello World! on the page.

// Now, open another terminal and use curl to send a POST request to the /comments endpoint:

// curl -X POST http://localhost:3000/comments -d '{"comment": "This is a comment!"}' -H 'Content-Type: application/json'

// In the terminal where the server is running, you should see the following output:

// { comment: 'This is a comment!' }
// This is the comment that was sent in the request body.

// This is a simple example of how to create a web server with Express and handle POST requests. You can use this as a starting point for building more complex applications.