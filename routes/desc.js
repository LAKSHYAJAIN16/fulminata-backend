const router = require("express").Router();

router.get("/home", (req, res) => {
    return res.send("The Backend API for Fulminata. Not so flashy or anything, just a plain old api");
})
router.get("/about", (req, res) => {
    return res.send("The Backend API for Fulminata. Not so flashy or anything, just a plain old api");
})
router.get("/creator", (req, res) => {
    return res.send("Lakshya Jain");
})

module.exports = router;