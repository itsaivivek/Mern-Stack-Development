// CRUD Operation
use("CrudDb")

// CREATE
db.createCollection("courses")

// db.courses.insertOne({
//     name: "Harrys web dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })

// db.courses.insertMany([
//   {
//     "name": "Harrys web dev free course",
//     "price": 0,
//     "assignments": 12,
//     "projects": 45
//   },
//   {
//     "name": "Full-Stack Bootcamp Essentials",
//     "price": 29,
//     "assignments": 15,
//     "projects": 10
//   },
//   {
//     "name": "JavaScript Mastery Program",
//     "price": 49,
//     "assignments": 20,
//     "projects": 8
//   },
//   {
//     "name": "Intro to Python for Beginners",
//     "price": 0,
//     "assignments": 10,
//     "projects": 5
//   },
//   {
//     "name": "React & Next.js Developer Path",
//     "price": 99,
//     "assignments": 25,
//     "projects": 12
//   },
//   {
//     "name": "Backend Engineering with Node.js",
//     "price": 59,
//     "assignments": 18,
//     "projects": 7
//   },
//   {
//     "name": "UI/UX Design Fundamentals",
//     "price": 19,
//     "assignments": 8,
//     "projects": 3
//   },
//   {
//     "name": "Advanced TypeScript Course",
//     "price": 39,
//     "assignments": 12,
//     "projects": 6
//   },
//   {
//     "name": "Database & SQL Complete Guide",
//     "price": 25,
//     "assignments": 14,
//     "projects": 9
//   },
//   {
//     "name": "Cloud & DevOps Crash Course",
//     "price": 79,
//     "assignments": 22,
//     "projects": 11
//   }
// ]
// )

// READ
// let a = db.courses.find({price: 0})
// console.log(a.toArray())

// let b = db.courses.findOne({price: 0})
// console.log(b)

// UPDATE

db.courses.updateOne({ price: 0 }, { $set: { price: 100 } })

db.courses.updateMany({ price: 0 }, { $set: { price: 1000 } })

// DELETE

db.courses.deleteOne({price:100})

db.courses.deleteMany({price:1000})