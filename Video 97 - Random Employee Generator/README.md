# Random Employee Generator

A simple full-stack application that generates 10 random dummy employee records and stores them in MongoDB.  
You can generate fresh random data and display it beautifully on a dark-themed webpage.

Built with: **Node.js + Express + Mongoose + EJS + Vanilla JavaScript**

## Folder Structure

```
Video 97 - Random Employee Generator
├── models
│   └── Employee.js
├── views
│   └── index.ejs
├── .gitmodules
├── main.js
├── package.json
├── package-lock.json
└── README.md
```

## Features

- Generate 10 random employees with one click
- Clears old data automatically before generating new records
- Nice dark UI with responsive grid cards
- Animated progress bar during generation (client-side simulation)
- Show all current employees stored in database
- Data displayed in clean object-like card format

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **ORM**: Mongoose
- **Template Engine**: EJS
- **Frontend**: HTML, CSS (Bootstrap + W3.CSS + Custom), Vanilla JavaScript (Fetch API)

## How It Works

1. Homepage (`/`) → renders `index.ejs` (main UI with buttons)
2. Click **Generate Now** → calls `/generate` endpoint
   - Deletes all previous records
   - Creates 10 new random `Employee` documents
   - Saves them to MongoDB
3. Click **Show Data** → calls `/show` endpoint
   - Fetches all employees from MongoDB (without `_id`)
   - Displays them in beautiful cards on the page

Random data includes:

- Name (from predefined list)
- Salary (0–50,000)
- Favorite Coding Language
- City
- Manager status (≈50% chance)

## Installation & Running Locally

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB Atlas account (or local MongoDB)

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/itsaivivek/Mern-Stack-Development.git
cd Video 97 - Random Employee Generator
```

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file** (recommended) or directly update connection string in `main.js`

    - Copy your connection string and paste here.
    - OR, Write this line in your .env file make sure to replace `<username>`, `<password>` and `<cluster>`
```bash
# .env (optional but better)
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/company
```

Then in `main.js` you can change to:

```js
await mongoose.connect(process.env.MONGODB_URI);
```

4. **Start the application**

```bash
node main.js
# or with nodemon (recommended during development)
npm install -g nodemon
nodemon main.js
```

5. Open your browser:

```
http://localhost:3000
```

## Important Security Note

⚠️ **Never commit your real MongoDB password** in the code!  
Use environment variables (`.env` file + `dotenv` package) in real projects.


## License

Feel free to use, modify, learn from it!  
Made with ❤️ for learning purposes.

Happy Coding! 🚀
