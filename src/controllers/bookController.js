const authorModel = require("../models/authorModel");
const BookModel = require("../models/bookModel");

const createBook = async function (req, res) {
    let data = req.body;

    let savedData = await BookModel.create(data);
    res.send({ msg: savedData });
};

const bookPriceRange = async function (req, res) {
    let books = await BookModel.find({ price: { $gte: 50, $lte: 100 } }).select(
        { author_id: 1 }
    );
    let author = await authorModel
        .find({ author_id: books.map((ele) => ele.author_id) })
        .select({ author_name: 1, _id: 0 });
    res.send({ msg: author });
};

module.exports.createBook = createBook;
module.exports.bookPriceRange = bookPriceRange;
