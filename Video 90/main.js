const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')

const fs = require("fs")


app.use('/blog', blog)


// app.use(express.static("public"))

// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

// app.use(myLogger)


// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    // console.log('m1')
    console.log(req.headers)
    req.vivek = "I am vivek";
    fs.appendFileSync("Logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middleware 1")
    next();
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello About!' + req.vivek)
})
app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
