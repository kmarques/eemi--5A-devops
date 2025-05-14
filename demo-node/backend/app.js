const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());

function generateRandomString() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/hello", (req, res) => {
  res.json({ message: `Hello ${generateRandomString()}` });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
