const express = require("express");
const lodash = require("lodash");
const abc = require("../introduction/intro");
const router = express.Router();

router.get("/test-me", function (req, res) {
    console.log("My batch is", abc.name);
    abc.printName();
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
    res.send("My second ever api!");
});

router.get("/students", function (req, res) {
    let students = ["Sabiha", "Neha", "Akash"];
    res.send(students);
});

router.get("/student-details/:name", function (req, res) {
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params;

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request " + JSON.stringify(requestParams));
    let studentName = requestParams.name;
    console.log("Name of the student is ", studentName);

    res.send("Dummy response");
});

module.exports = router;
