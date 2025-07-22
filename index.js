// express app
const express = require("express");
const app = express();

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
]
// routes
app.get("/", (req, res) => {
  res.send(`Hello ${nameList[Math.floor(Math.random() * nameList.length)]}`);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Hello ${nameList[id]}`);
});

// TASK: Add name to the nameList
// path: /add-name
// test using CURL: 
// curl http://localhost:3000/add-name -X POST -d "name=John"
//

// TASK Update name in the namelist based on the id
// path: /update-name/:id
// test using CURL: 
// curl http://localhost:3000/update-name/1 -X PUT -d "name=John"
//

// TASK Delete name from the nameList based on the id
// path: /delete-name/:id
// test using CURL: 
// curl http://localhost:3000/delete-name/1 -X DELETE
//

// listen
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});