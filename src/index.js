const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const { default: mongoose } = require("mongoose");
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
    .connect(
        "mongodb+srv://ManjushaRaut:OjllbBZtnJwKxD3I@cluster0.3qd4bit.mongodb.net/Middleware?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
        }
    )
    .then(() => console.log("MongoDb is connected"))
    .catch((err) => console.log(err));

app.use(function (req, res, next) {
    console.log("inside GLOBAL MW");
    next();
});

app.use("/", function (req, res, next) {
    console.log("inside GLOBAL MW");
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const currentDate = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const timestamp = `${year}-${month}-${currentDate} ${hour}:${minute}:${second}`;
    const parseIp = (req) =>
        req.headers["x-forwarded-for"]?.split(",").shift() ||
        req.socket?.remoteAddress;

    console.log(`${timestamp}, ${parseIp(req)}, ${req.path}`);
    next();
});

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
    console.log("Express app running on port " + (process.env.PORT || 3000));
});
