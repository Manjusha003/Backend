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

    let arr1 = [90, 89, 65, 46, 90];
    let arr2 = [76, 54, 34, 46, 77];
    let arr3 = [66, 68, 43, 90, 65, 78];
    let arr4 = [64, 72, 77, 98, 89];
    let arr5 = [66, 89, 43, 34, 77];

    let unionArr = lodash.union(arr1, arr2, arr3, arr4, arr5);
    console.log(unionArr);

    let array1 = [
        ["horror", "The shining"],
        ["name", "Manjusha"],
        ["batch", "Plutonium"],
        ["drama", "Titanic"],
    ];
    let obj = lodash.fromPairs(array1);
    console.log(obj);
});

module.exports = router;
