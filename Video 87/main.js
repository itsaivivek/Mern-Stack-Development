const fs = require("fs")
// const fs = require("fs/promises")

console.log("starting");

// fs.writeFileSync("vivek.txt", "Vivek is a good boy") // This is synchronous

fs.writeFile("harry2.txt", "Harry is a good boy", ()=>{
    console.log("done");
    fs.readFile("harry2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
}) // This is asynchronous

fs.appendFile("vivek.txt", "Vivekrobo", (e, d) => {
  console.log(d);
}
)

console.log("ending")