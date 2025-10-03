// express-server.js
import express from "express"
const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Hello, World! This is a Node.js server with Express 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
