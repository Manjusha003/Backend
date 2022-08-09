const express = require("express");

const abc = require("../introduction/intro");
const router = express.Router();

router.get("/test-me", function (req, res) {
    console.log("My batch is", abc.name);
    abc.printName();

    res.send("My second ever api!");
});

router.get("/movies", function (req, res) {
    const movies = [
        "Rang de basanti",
        "The shining",
        "Lord if the rings",
        "Batman begins",
    ];
    res.send(movies);
});

router.get("/movies/:indexNumber", function (req, res) {
    const movies = [
        "Rang de basanti",
        "The shining",
        "Lord if the rings",
        "Batman begins",
    ];
    let index = req.params.indexNumber;
    if (index < 0 || index >= movies.length) {
        return res.send("movie is not present in the given index");
    }
    let movieName = movies[index];
    console.log(movieName);
    res.send(movieName);
});

router.get("/films", function (req, res) {
    const films = [
        {
            id: 1,
            name: "The Shining",
        },
        {
            id: 2,
            name: "Incendies",
        },
        {
            id: 3,
            name: "Rang de Bsanti",
        },
        {
            id: 4,
            name: "Finding Nemo",
        },
    ];
    res.send(films);
});
router.get("/films/:filmId", function (req, res) {
    const films = [
        {
            id: 1,
            name: "The Shining",
        },
        {
            id: 2,
            name: "Incendies",
        },
        {
            id: 3,
            name: "Rang de Bsanti",
        },
        {
            id: 4,
            name: "Finding Nemo",
        },
    ];

    for (let i = 0; i < films.length; i++) {
        let film = films[i];
        let filmId = film.id;
        if (film.id === filmId) {
            return res.send(film);
        }
    }
    res.send("This Film id doesn't exist in the array of films");
});

module.exports = router;
