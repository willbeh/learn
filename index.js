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
  res.send(`Hello ${nameList.map((name, index) => `${index}: ${name}`).join(", ")}`);
});

// TASK: Add name to the nameList
// path: /add-name
// test using CURL: 
// curl http://localhost:3000/add-name -X POST -d "name=John"
//
app.post("/add-name", (req, res) => {
  const name = req.body.name;
  nameList.push(name);
  res.send(`Added ${name} to the nameList`);
});

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

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Hello ${nameList[id]} aaa`);
});

// listen
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});