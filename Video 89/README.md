# Video Description

**Note**: _Before we start initialize the npm by doing `npm init -y` and also install express by doing `npm i express`. I am using express version 4_

## Express app.get() Request Function

The `app.get()` function is used to define routes on your server that handle **HTTP GET requests**. A **GET** request is typically used when the client asks the server to send back some information, like retrieving a webpage or data from a database.

```
app.get( path, callback )
```
### How does app.get() work in Express?

1. **Import Express and Create an App**: This code imports the Express module and creates an Express application instance. This app instance is used to define routes and handle HTTP requests.

    ```
    const express = require('express');
    const app = express();
    ```
2. **Define a GET Route**: This code defines a route that listens for GET requests at `/`. When accessed, it responds with "Hello, World!".

    ```
    app.get('/', (req, res) => {
    res.send("Hello World!");
    });
    ```
3. **Start the Server**: This code starts the server and makes it listen on port 3000. When the server runs, it logs "Server is running on port 3000" to the console.

    ```
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
    ```

## Express app.post() Function

**POST** request is an HTTP request method primarily used when a client wants to send data to the server to create a new entry, such as a new user account, a new product in a database, or a new item in a list.

The `app.post()` function in Express.js handles **HTTP POST requests** to a specific route. It defines a callback function to process incoming data sent via **POST**, typically used for submitting forms or sending data to a server from clients.

- **Syntax**

    ```
    app.post(path, callback [, callback ...])
    ```

- **Below is the code example of `app.post()` Function**

    ```
    const express = require('express');
    const app = express();
    const PORT = 3000;

    app.post('/', (req, res) => {
            res.send("POST Request Called")
        })

    app.listen(PORT, function (err) {
            if (err) console.log(err);
            console.log("Server listening on PORT", PORT);
        });
    ```

- **Output**: Now run the server using `nodemon main.js` and make a POST request to http://localhost:3000/ and you will get the following output:

    - Console Output
        ```
        Server listening on PORT 3000
        ```
    
    - Browser Output

        ```
        POST Request Called
        ```


## Express app.put() Function

In Express.js, a **PUT** request is an HTTP method used to update or replace an entire resource on the server. It is a fundamental part of building RESTful APIs, enabling the "Update" operation in **CRUD (Create, Read, Update, Delete)**. The primary purpose of a PUT request is to modify an existing resource or create a new one if it doesn't already exist at the specified URI. If you send a PUT request to update a user's profile, sending it multiple times with the same data will still result in the user's profile being updated only once to that specific state. This contrasts with a **POST** request, which might create multiple resources if sent repeatedly.

- **Syntax**:

    ```
    app.put(path, callback [, callback ...])
    ```
- **Below is the code example of `app.post()` Function**:

    ```
    const express = require('express');
    const app = express();
    const PORT = 3000;

    app.put('/', (req, res) => {
            res.send("PUT Request Called")
        })

    app.listen(PORT, function (err) {
            if (err) console.log(err);
            console.log("Server listening on PORT", PORT);
        });
    ```
- **Output**: Now run the server using `nodemon main.js` and make a PUT request to http://localhost:3000/ and you will get the following output:

    - Console Output
        ```
        Server listening on PORT 3000
        ```
    
    - Browser Output

        ```
        PUT Request Called
        ```
## Express app.delete() Function

In Express.js, a DELETE request is an HTTP request method used to remove a specific resource from the server. It is a fundamental part of building RESTful APIs, allowing clients to initiate the deletion of data or entities managed by the server.

The `app.delete()` function is utilized to handle HTTP DELETE requests for a specified path. It takes the path as a parameter and also accepts callback functions as parameters to handle the request.

- **Syntax**:
    
    ```
    app.delete(path, callback)
    ```

- **Below is the code example of `app.post()` Function**:

    ```
    const express = require('express');
    const app = express();
    const PORT = 3000;

    app.delete('/', (req, res) => {
            res.send("DELETE Request Called")
        })

    app.listen(PORT, function (err) {
            if (err) console.log(err);
            console.log("Server listening on PORT", PORT);
        });
    ```
- **Output**: Now run the server using `nodemon main.js` and make a PUT request to http://localhost:3000/ and you will get the following output:

    - Console Output
        ```
        Server listening on PORT 3000
        ```
    
    - Browser Output

        ```
        DELETE Request Called
        ```

### Chaining of Request:

```
app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World2!')
}).post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
}).put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put!')
})
```

### Serving HTML files:

The `res.sendFile()` function in Express.js is a convenient method for sending static files (like HTML, PDFs, images, or other media) directly to the client. It transfers the file at the given path and it sets the Content-Type response HTTP header field based on the filename extension. 

```
app.get('/index', (req, res) => {
  console.log('Hey its index');
  res.sendFile('templates/index.html', { root: __dirname });
});
```

- **How the code works**
    This code sets up a route in an Express application that:
    - **Listens for requests** at the `/index`endpoint.
    - **Logs a message** to the server console whenever that endpoint is accessed.
    - **Sends the index.html** file located in the templates directory. The `{ root: __dirname }` option tells `res.sendFile` to look for the file relative to the current directory of the application. 

**Note**: _You can also send a JSON Response as `res.json({a: 1, b: 2, c: 3, name: ["vivek", "harry"]})`_

## **How to do POST/PUT/DELETE/GET request in a browser**:

**Note**: I am showing example of `POST` request. It is same for all request **(just replce `POST` with other)**. The `GET` request can directly done by simply accessing the URL

1. **Using HTML File**:

    - Use `express.static()` function in your main.js and add the directory name where your HTML file lies.
    
        ```
        app.use(express.static('directory_name'));
        ```
        For eg: `app.use(express.static('public'));`

    - Use script tag in HTML file and write async function to fetch `/` using `{method: "POST"}`

        ```
        <script>
            async function testPost() {
                let a = await fetch("/", {method: "POST"});
                let b = await a.text();
                console.log(b)
            }

            testPost();
        </script>
        ```

2. **Using Postman**:

    Postman is a powerful API development and testing tool that simplifies the process of building, testing, and managing APIs. It allows developers to send HTTP requests, analyze responses, automate workflows, and collaborate efficiently.

    - **Create a New Request**: Open Postman and click on the "New" button or the "+" icon to create a new request tab.

    - **Select POST Method**: In the dropdown menu next to the URL input field, select `"POST"` as the HTTP method.

    - **Enter Request URL**: In the URL input field, enter the endpoint URL to which you want to send the POST request.

## Express express.Router() Function:

The express.Router() function in Express.js creates a new router object that can handle requests in a modular and organized way. It serves as a mini-application with middleware and routes but is limited to specific segments of your application.

By using express.Router(), you can organize your Express app's routing logic, allowing you to define specific routes and middleware for different parts of your application, such as users, products, or orders, in a more maintainable way.

- **Syntax**: `const router = express.Router()`

- **Why Use express.Router()**:

    As your Express application grows, maintaining all routes in a single file can become unmanageable. `express.Router()` provides a way to organize related routes together and apply middleware to them efficiently. Here’s why you might consider using it:

- **Steps**:

    1. Create a router file named blog.js in the app directory, with the following content:

        ```
        const express = require('express')
        const router = express.Router()

        // define the home page route
        router.get('/', (req, res) => {
        res.send('Blog home page')
        })

        // define the about route
        router.get('/about', (req, res) => {
        res.send('About Blog')
        })

        // define the /blogpost/variable route
        router.get('/blogpost/:slug', (req, res) => {
        res.send(`fetch the blogpost for ${req.params.slug}`)
        })

        module.exports = router

        ```

    2. Then, load the router module in the app by pasting these two lines of code:

        ```
        const blog = require('./blog')

        app.use('/blog', blog)
        ```
    
    3. Then try to visit the specific URL in browser. For example: visiting localhost:3000/blog will show `"About Blog"` and visiting localhost:3000/blog/blogpost/javascript will show `"fetch the blogpost for javascript"`

**Note**: _To be organized make a routes named folder and place all routes file inside it. When doing so update the path in your app `const blog = require('./routes/blog')`_