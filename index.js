//Imports
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user-route");
const postRoute = require("./routes/post-route");
const categoryRoute = require("./routes/category-route");
const describeRoute = require("./routes/desc");

//Initialize express
const app = express();
const port = process.env.port || 5000
console.log(port);
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
app.listen(port, () => { });
//Log into Mongo
const uri = "mongodb+srv://nice:nice@blog.2amdo.mongodb.net/blog?retryWrites=true&w=majority";
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

//Multer for files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});
console.log("Multer Loaded in");

//File upload route
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
    console.log(file);
});

//Fixed Routes
app.get("/check", (req, res) => {
    return res.send("Check Works");
});

//Manual Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/general", describeRoute)
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

console.log("routes loaded in");