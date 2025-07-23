// express app
const express = require("express");
const app = express();

// Parse JSON bodies
app.use(express.json());

const nameList = [
  "Amy",
  "Betty",
  "Cathy",
  "Diana",
  "Ethan",
  "Fiona",
  "George",
  "Hannah",
  "Ivy",
  "Jack",
];

// Helper functions for students to test
function getUserById(id) {
  const numId = parseInt(id);
  if (isNaN(numId) || numId < 0 || numId >= nameList.length) {
    return null;
  }
  return nameList[numId];
}

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

function formatUserList() {
  return nameList.map((name, index) => `${index}: ${name}`).join(", ");
}

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the User API",
    users: formatUserList()
  });
});

app.get("/users/:id", (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json({ id: req.params.id, name: user });
});

app.get("/age/:birthYear", (req, res) => {
  const birthYear = parseInt(req.params.birthYear);
  if (isNaN(birthYear) || birthYear < 1900 || birthYear > new Date().getFullYear()) {
    return res.status(400).json({ error: "Invalid birth year" });
  }

  const age = calculateAge(birthYear);
  res.json({ birthYear, age });
});

// Export for testing
module.exports = { app, getUserById, calculateAge, formatUserList };

// Start server only if this file is run directly
if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}