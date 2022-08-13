const express = require("express");
const router = express.Router();
const bookModel = require("../models/bookModel");
const bookController = require("../controllers/bookController");

router.get("/test-me", function (req, res) {
    res.send("My first Ever Api");
});

router.post("/createBook", bookController.createBook);

router.get("/getBooksDetails", bookController.getBooksDetails);

module.exports = router;
