const express = require("express");
const lodash = require("lodash");

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

    let month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let result = lodash.chunk(month, 3);
    console.log(result);

    let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    let ans = lodash.tail(arr);
    console.log(ans);
});

module.exports = router;
