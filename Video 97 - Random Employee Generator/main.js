import express from "express"
import mongoose from "mongoose"
import Employee from "./models/Employee.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = 3000

await mongoose.connect(process.env.MONGODB_URI)

app.set('view engine', 'ejs');



let getRandom = (arr) => {
  let rIndex = Math.floor(Math.random() * arr.length);
  return arr[rIndex];
}


let randomNames = ["Harry", "Vivek", "Ankit", "Kishor", "Rohan", "Ravi", "Krishna", "Subash", "Dipika", "Payal", "Omkar", "Divya"]
let randomLanguages = ["Python", "Java", "C++", "JavaScript", "Rust", "Go", "C#", "Typescript", "PHP", "Kotlin"]
let randomCities = ["New York", "Delhi", "Kathmandu", "Kolkata", "Mahendranagar", "Pune", "Paris"]

app.get('/', (req, res) => {

  res.render('index', { foo: 'FOO' });
})

app.get('/generate', async (req, res) => {
  await Employee.deleteMany({}) // Frees the database

  // Code to generate Random 10 data for Employee
  for (let index = 0; index < 10; index++) {
    const employee = new Employee({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 50000), // Generate random salary from 0 to 50,000
      codingLang: getRandom(randomLanguages),
      city: getRandom(randomCities),
      isManager: (Math.random() > -0.5) ? true : false
    })
    employee.save()

  }
})

app.get('/show', async (req, res) => {
  const employeedata = await Employee.find({}, {_id:0})
  res.json(employeedata)
})

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
})
