const { count } = require("console");
const BookModel = require("../models/bookModel");

//POST
const createBook = async function (req, res) {
    let data = req.body;

    let savedData = await BookModel.create(data);
    res.send({ msg: savedData });
};

//GET
const bookList = async function (req, res) {
    let bookList = await BookModel.find().select({
        bookName: 1,
        authorName: 1,
        _id: 0,
    });
    res.send({ msg: bookList });
};

//POST
const getBooksInYear = async function (req, res) {
    let inputYear = req.query.year;
    let bookList = await BookModel.find({ year: { $eq: inputYear } });
    res.send({ msg: bookList });
};

//POST
const getParticularBooks = async function (req, res) {
    let inputData = req.body;
    let bookList = await BookModel.find(inputData);
    res.send({ msg: bookList });
};

//GET
const getXINRBooks = async function (req, res) {
    let inputData = req.body;
    let bookList = await BookModel.find({
        "price.indianPrice": { $in: ["100INR", "200INR", "500INR"] },
    });
    res.send(bookList);
};
//GET
const getRandomBooks = async function (req, res) {
    let bookList = await BookModel.find({
        $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }],
    });
    res.send(bookList);
};

module.exports.createBook = createBook;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getRandomBooks = getRandomBooks;
module.exports.getXINRBooks = getXINRBooks;
