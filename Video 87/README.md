# Video Description

## fs Module

The **fs module** in Node.js, short for File System, is a core built-in module that provides an API for interacting with the file system on your computer. It allows you to perform various file and directory operations, such as reading, writing, updating, deleting, and managing files and directories.

You can import the File System module using CommonJS require() or ES modules import syntax:
- CommonJS (Default in Node.js)
    ```
    const fs = require("fs");
    ```
- ES Modules (Node.js 14+ with "type": "module" in package.json)
    ```
    import fs from "fs"; 
    ```

## Core Functionality:

- **Reading Files**: Methods like `fs.readFile()` (asynchronous) and `fs.readFileSync()` (synchronous) allow you to read the content of files.
- **Writing Files**: `fs.writeFile()` (asynchronous) and `fs.writeFileSync()` (synchronous) are used to write data to files, creating them if they don't exist or overwriting them if they do.
- **Appending to Files**: `fs.appendFile()` (asynchronous) and `fs.appendFileSync()` (synchronous) allow you to add data to the end of an existing file.
- **Deleting Files**: `fs.unlink()` (asynchronous) and `fs.unlinkSync()` (synchronous) are used to remove files.
- **Renaming/Moving Files**: `fs.rename()` (asynchronous) and `fs.renameSync()` (synchronous) can be used to change a file's name or move it to a different location.
- **Directory Operations**: The module also includes functions for creating, reading, and deleting directories (e.g., `fs.mkdir()`, `fs.readdir()`, `fs.rmdir()`).
- **File Information**: Methods like `fs.stat()` can retrieve information about a file, such as its size, creation date, and modification date.

## Asynchronous vs. Synchronous:

The fs module provides both asynchronous and synchronous versions of most operations.
- **Asynchronous methods** (e.g., `fs.readFile()`) are non-blocking and typically take a callback function as an argument, which is executed once the operation completes. This is generally preferred in Node.js for performance as it allows other code to run while I/O operations are in progress.
- **Synchronous methods** (e.g., `fs.readFileSync()`) block the execution of the program until the operation is complete. While simpler to use in some cases, they can lead to performance issues in server-side applications if used excessively for long-running operations.

## fs.promises

**fs.promises** is a module in Node.js that provides a promise-based interface for asynchronous file system operations, replacing the older callback-style functions

- Import the module:

    Using CommonJs
    ```
    const fs = require('fs/promises');
    ```
    Or using Es modules
    ```
    import fs from 'fs/promises;
    ```

**Note**: _We can directly use await in Nodejs module file without wrapping inside async function_ .

## path Module

The **path module** in Node.js is a built-in module that provides utilities for working with file and directory paths. It is crucial for handling paths in a platform-agnostic way, as it accounts for differences in path separators between operating systems (e.g., backslashes on Windows, forward slashes on POSIX systems like Linux and macOS).

- Importing the Module

    Using CommonJs
    ```
    const path = require("path");
    ```
    Or using Es module
    ```
    import path from "path";
    ```

- Some Path Methods

    `path.join()` - Joins multiple path segments into a single path.

    `path.resolve()` - Resolves a sequence of paths into an absolute path.

    `path.basename()` - Returns the last portion of a path, typically the file name.

    `path.dirname()` - Returns the directory name of a path.

    `path.extname()` - Returns the extension of the file in a path.