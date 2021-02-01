require('dotenv/config');
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");

const multer = require("multer");

const upload = multer({
  dest: "test",
});

app.post("/avatar", upload.single("a"), (req, res) => {
  res.send();
});

connectDB();
app.use(express.json({ extended: false }));
app.use(cors());

app.get("/", (req, res) => res.send("API running"));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is started on port ${PORT}`));
