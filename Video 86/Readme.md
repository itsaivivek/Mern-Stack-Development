### Video Description
- What are **Modules**?
    JavaScript modules allow you to break up your code into separate files. This makes it easier to maintain a code-base. Modules are imported from external files with the import statement.

- Installing **dotenv, express, jsonwebtoken**:
    1. **Express.js** is a popular, minimalist web application framework for Node.js. It simplifies the process of building web servers and APIs in Node.js by providing a robust set of features for routing, middleware, and request handling.
    2. The **jsonwebtoken** npm package is a widely used library for implementing JSON Web Tokens (JWTs) in Node.js applications. It provides functionalities for creating, signing, and verifying JWTs, which are commonly used for authentication and authorization in web applications.
    3. **dotenv** is a zero-dependency npm package used in Node.js applications to load environment variables from a .env file into process.env.

    ```
    npm install express jsonwebtoken dotenv
    ```

- Installing **ndoemon**:
    **nodemon** is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
    ```
    npm install --global nodemon
    ```

- We can change the setHeader Content-Type(plain to html)
    ```
    res.setHeader('Content-Type', 'text/plain');
    to
    res.setHeader('Content-Type', 'text/html');
    ```
    By doing this we can add html like this 
    ```
    res.end('<h1>Hello World</h1>');
    ```

- Difference between **"type": "common.js" and "module"**

    1. **CommonJS**:
        - **How it works**: When type is set to **commonjs** (or is omitted, as it's the default for Node.js), each .js file is a separate module. 
        - **Importing**: You use the **require()** function to load modules. For example, 
            ```
            const myModule = require('./my-module.js');
            ```
        - **Exporting**: You export values using **module.exports** or exports. For example: 
            ```
            module.exports = { value: 42 };
            ```
        - **Loading**: CommonJS modules are loaded **synchronously** from the local disk.

    2. **Module**:
        - **How it works**: This setting enables the use of the **ES module** syntax in a project. 
        - **Importing**: You use the **import** keyword. For example:
            ```
            import { name } from './person.js';
            ``` 
        - **Exporting**: You use the **export** keyword. For example:
            ```
            export const name = "Jesse";
            ``` 
        - **Loading**: Loaded **Asynchronously**.

- What is **import**?
    - You can import modules into a file in two ways, based on if they are **named exports** or **default exports**.

- What is **export**?
    - Modules with functions or variables can be stored in any external file.

- Difference Between **named export** and **default export**:

    1. **Named Export**:
        - **Export Multiple Values**: Named exports allow you to export multiple values from a single module, each with its own specific name.
        - **Import by Name**: When importing named exports, you must use the exact same name as they were exported with. These imports are enclosed in curly braces {}.
    
    2. **Default Export**:
        - **Export a Single Value**: Each module can have only one default export. This single value can be a function, class, object, or primitive.
        - **Import with Any Name**: When importing a default export, you can give it any name you choose in the importing module. No curly braces are required during import.

- Modules in **Browsers**: 

    JavaScript modules can be used directly in browsers by including the type="module" attribute in the `<script>` tag. This enables the use of ES6 import and export syntax, allowing for modular development where code can be organized into separate files and shared between them.

- **Module wrapper**:

    The function signature 
    ```
    (function(expotrs, require, module, __filename, __dirname) {
        // Module code actually lives here
    });
    ```
    is the **"module wrapper function"** that Node.js uses internally to encapsulate your code. This design prevents top-level variables and functions from polluting the global scope and makes Node.js's CommonJS module system work. 