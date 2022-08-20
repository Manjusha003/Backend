const authorModel = require("../models/authorModel");

const bookModel = require("../models/bookModel");
const publisherModel = require("../models/publisherModel");
const createBook = async function (req, res) {
    let book = req.body;
    let authorId = req.body.author;
    let publisherId = req.body.publisher;

    if (authorId && publisherId) {
        let pId = await publisherModel.findById({ _id: publisherId });
        let aId = await authorModel.findById({ _id: authorId });
        if (aId && pId) {
            let bookCreated = await bookModel.create(book);
            res.send({ data: bookCreated });
        } else {
            res.send({ msg: "This is  not a valid ID" });
        }
    } else {
        res.send({ msg: "This is required Details !!" });
    }
};

const getBookDetails = async function (req, res) {
    const books = await bookModel.find().populate("author publisher");
    res.send({ msg: books });
};
const updatedBooks = async function (req, res) {
    const updateUsingPublisher = await publisherModel
        .find()
        .updateMany(
            { name: { $in: ["Penguin", "HarperCollins"] } },
            { $set: { isHardCover: true } },
            { new: true }
        );

    const booksRating = await bookModel
        .find()
        .updateMany(
            { ratings: { $gt: 3.5 } },
            { $inc: { price: 10 } },
            { new: true }
        );
    res.send({ msg: updateUsingPublisher, booksRating });
};

module.exports.createBook = createBook;

module.exports.getBookDetails = getBookDetails;
module.exports.updatedBooks = updatedBooks;
