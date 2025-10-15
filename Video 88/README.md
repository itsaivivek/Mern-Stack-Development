# Video Description

**Note**: _Always initialize the npm project in first with `npm init` or, `npm init -y`._

## Express.js

**Express.js** is a minimal and flexible Node.js web application framework that provides a list of features for building web and mobile applications easily. It simplifies the development of server-side applications by offering an easy-to-use API for routing, middleware, and HTTP utilities.

- Installing Express.js:

    ```
    npm i express
    ```
- Installing Custom version of Express.js:

    ```
    npm i express@4.18.2
    ```

- **Hello World!** Code in express:

    ```
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
    res.send('Hello World!')
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
    ```

- Start the Server:

    ```
    node main.js
    ```

    Or using `nodemon` (automatically restarts your node application when it detects any changes)

    ```
    nodemon main.js
    ```

    If **nodemon** is not installed then run this command in terminal

    ```
    npm install -global nodemon
    ```

- Web Browser Output:

    When you navigate to http://localhost:3000 in your web browser, you should see Hello World!

## How Express.js Works

- A client sends a request (e.g., browser or app) to the Express server.
- The request passes through middleware functions that can modify the request, perform logging, authentication, or other tasks.
- Express matches the request to a route handler based on the URL and HTTP method.
- The route handler processes the request and prepares a response.
- The server sends the response back to the client.
If any error occurs, it is caught by error-handling middleware to ensure the server remains stable.

## Basic Routing in Express.js

Basic routing in Express.js is the process of defining URL endpoints (routes) and specifying how the server should respond to client requests at those endpoints.

Express provides simple methods to define routes that correspond to HTTP methods:

`app.get()` - Handle GET requests

    // Handle GET requests
    app.get('/get-example', (req, res) => {
    res.send('This is a GET request');
    });

`app.post()` - Handle POST requests

`app.put()` - Handle PUT requests

`app.delete() `- Handle DELETE requests

`app.all()` - Handle all HTTP methods

## Types of Parameters in Express:

1. **Route Parameters**: Part of the URL `(e.g., /users/:id)` accessed via `req.params`.

    ```
    app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is ${userId}`);
    });
    ```

2. **Query Parameters**: Appended to the URL `(e.g., /search?term=nodejs&region=np)` accessed via `req.query`.

    ```
    app.get('/search', (req, res) => {
    const searchTerm = req.query.term;
    res.send(`Searching for ${searchTerm}`);
    });
    ```

3. **Request Body Parameters**: Sent in POST or PUT requests, accessed via `req.body` with `express.json()` middleware.

    ```
    app.use(express.json());

    app.post('/users', (req, res) => {
    const { name, age } = req.body;
    res.send(`User created: ${name}, Age: ${age}`);
    });
    ```

## express.static() Function:

The `express.static()` is a built-in middleware function in Express.js that allows you to serve static files (like images, HTML, CSS, and JavaScript) directly to the client. It automatically makes all files inside a specified folder accessible via HTTP requests. You don’t have to create custom routes for each file.

```
app.use(express.static('directory_name'));
```

## Code implementation of express.static()

1. **Create a public Folder**: Inside this folder, place an index.html file and any images you want to display.

2. **Make a server.js file and use this syntax**:

    ```
    app.use(express.static('public'));
    ```

3. **Run the server and visit localhost:3000/file_name**: Here in place of file_name write the name of file that you placed inside public folder. And try to see that has been rendered on the page or not.