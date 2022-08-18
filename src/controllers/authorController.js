const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");

const createAuthor = async function (req, res) {
    let data = req.body;

    let savedData = await authorModel.create(data);
    res.send({ msg: savedData });
};

const booksByChetan = async function (req, res) {
    let chetanBooks = await authorModel.find({ author_name: "Chetan Bhagat" });
    let id = chetanBooks[0].author_id;
    let BookList = await bookModel.find({ author_id: id });
    res.send({ msg: BookList });
};
const findAuthorofTwoStates = async function (req, res) {
    let author = await bookModel.findOneAndUpdate(
        { name: "Two states" },
        { $set: { price: 100 } },
        { new: true }
    );
    let price = author.price;
    let authorId = author.author_id;
    let authorName = await authorModel.find({ author_id: authorId });

    let author_Name = authorName[0].author_name;

    res.send({ msg: { author_Name, price } });
};
module.exports.createAuthor = createAuthor;
module.exports.findAuthorofTwoStates = findAuthorofTwoStates;
module.exports.booksByChetan = booksByChetan;
