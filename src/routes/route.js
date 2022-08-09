const express = require("express");

const abc = require("../introduction/intro");
const router = express.Router();

router.get("/test-me", function (req, res) {
    console.log("My batch is", abc.name);
    abc.printName();

    res.send("My second ever api!");
});

router.get("/sol1", function (req, res) {
    let arr = [1, 2, 3, 5, 6, 7];

    let arrSum = arr.reduce((prev, curr) => prev + curr);
    let lastDigit = arr.pop();
    let totalSum = (lastDigit * (lastDigit + 1)) / 2;

    let missingNumber = totalSum - arrSum;
    res.send({ data: missingNumber });
});

router.get("/sol2", function (req, res) {
    let arr = [33, 34, 35, 37, 38];
    let arrSum = arr.reduce((prev, curr) => prev + curr);
    let totalSum = ((arr.length + 1) * (arr[0] + arr[arr.length - 1])) / 2;

    let missingNumber = totalSum - arrSum;
    res.send({ data: missingNumber });
});

module.exports = router;
