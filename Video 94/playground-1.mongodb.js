
// Select the database to use.
use('sigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
  { 
    "name": "Java",
    "price": 20000,
    "Instructor": "Harry"
  },
  { 
    "name": "Python",
    "price": 18000,
    "Instructor": "Alice"
  },
  { 
    "name": "JavaScript",
    "price": 15000,
    "Instructor": "Mark"
  },
  { 
    "name": "C++",
    "price": 22000,
    "Instructor": "Sophia"
  },
  { 
    "name": "Data Science",
    "price": 30000,
    "Instructor": "John"
  }
]
);



// Print a message to the output window.
console.log(`Done Inserting Data`);
