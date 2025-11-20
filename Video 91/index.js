/*
You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders.

for example, these files become:

1. name.jpg
2. name.png
3. this.pdf
4. harry.zip
5. Rohan.zip
6. cat.jpg
7. harry.pdf

this:
jpg/name.jpg, jpg/cat.jpg
png/name.png
pdf/this.pdf, pdf/harry.pdf
zip/harry.zip, zip/Rohan.zip

*/

import fs from "fs/promises";
import path from "path";


async function clearTheClutter(directory) {
    try {

        let files = await fs.readdir(directory) // Reading all files from the directory using fs/promises

        const ignoreExtension = ["js", "json"];
        for (const file of files) {

            let ext = file.split(".").pop(); // Getting the extension name of the files

            let filepath = path.join(directory, file);

            let folderPath = path.join(directory, ext.toUpperCase()) // Making folder name with Uppercase and joining to the directory

            const stat = await fs.stat(filepath);
            if(stat.isDirectory()){ // checking if current file is folder then if it is folder then skipping
                continue;
            }

            if (ignoreExtension.includes(ext) && file.includes(".")) { // checking if ext is js and json also if file doesnot contains extension like README
                continue; // Skipping for this iteration
            }

                console.log("Running for ", file, "...")
                
                // Creating folder if not exists
                try {
                    await fs.mkdir(folderPath, { recursive: true });
                }
                catch (err) {
                    // ignored because recursive=true prevents errors
                }
                
                // Move file to folder
                await fs.rename(filepath, path.join(folderPath, file));
                
                console.log(`Moved: ${file} → ${ext.toUpperCase()}/`);
            }
                
        console.log("Clutter Cleared Successively")
    }
    catch (err) {
        console.error("Error:", err);
    }
}

// let directory = import.meta.dirname; 
// import.meta.dirname is a property available within ECMAScript Modules (ESM) that provides the absolute path to the directory containing the current module

let directory = "E:\\Sigma Web Development Course\\Mern-Stack-Development\\Video 91";

clearTheClutter(directory);

