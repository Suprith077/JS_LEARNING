const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json()); // Middleware to parse JSON body

const DATA_FILE = "./data.json";

// Helper function to read data from file
function readData() {
  const file = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(file);
}

// Helper function to write data to file
function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

//-------------------------------------------------------
// 🟢 CREATE - POST /users
//-------------------------------------------------------
app.post("/users", (req, res) => {
  const users = readData();
  const newUser = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  writeData(users);
  res.status(201).json({ message: "User created!", user: newUser });
});

//-------------------------------------------------------
// 🔵 READ ALL - GET /users
//-------------------------------------------------------
app.get("/users", (req, res) => {
  const users = readData();
  res.json(users);
});

//-------------------------------------------------------
// 🟣 READ ONE - GET /users/:id
//-------------------------------------------------------
app.get("/users/:id", (req, res) => {
  const users = readData();
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

//-------------------------------------------------------
// 🟠 UPDATE - PUT /users/:id
//-------------------------------------------------------
app.put("/users/:id", (req, res) => {
  const users = readData();
  const userIndex = users.findIndex((u) => u.id === Number(req.params.id));

  if (userIndex === -1)
    return res.status(404).json({ message: "User not found" });

  users[userIndex] = { ...users[userIndex], ...req.body };
  writeData(users);
  res.json({ message: "User updated", user: users[userIndex] });
});

//-------------------------------------------------------
// 🔴 DELETE - DELETE /users/:id
//-------------------------------------------------------
app.delete("/users/:id", (req, res) => {
  const users = readData();
  const filtered = users.filter((u) => u.id !== Number(req.params.id));

  if (users.length === filtered.length)
    return res.status(404).json({ message: "User not found" });

  writeData(filtered);
  res.json({ message: "User deleted successfully" });
});

//-------------------------------------------------------
// ⚫ ERROR HANDLER
//-------------------------------------------------------
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ error: "Something went wrong!" });
});

//-------------------------------------------------------
app.listen(3000, () => console.log("✅ Server running on port 3000"));