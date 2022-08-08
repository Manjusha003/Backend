const express = require("express");

const abc = require("../introduction/intro");
const logger = require("../logger/logger");
const helper = require("../util/helper");
const formatter = require("../validator/formatter");
const router = express.Router();

router.get("/test-me", function (req, res) {
    console.log("My batch is", abc.name);
    abc.printName();
    logger.welcome();
    helper.getDate();
    helper.getMonth();
    helper.getBatchInfo();
    formatter.getTrim();
    formatter.getLowerCase();
    formatter.getUpperCase();

    res.send("My second ever api!");
});

module.exports = router;
