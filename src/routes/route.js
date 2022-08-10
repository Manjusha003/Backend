const express = require("express");
const router = express.Router();

let players = [
    {
        name: "manish",
        dob: "1/1/1995",
        gender: "male",
        city: "jalandhar",
        sports: ["swimming"],
    },
    {
        name: "gopal",
        dob: "1/09/1995",
        gender: "male",
        city: "delhi",
        sports: ["soccer"],
    },
    {
        name: "lokesh",
        dob: "1/1/1990",
        gender: "male",
        city: "mumbai",
        sports: ["soccer"],
    },
];

router.post("/players", function (req, res) {
    let player = req.body;
    let playerName = player.name;

    for (let i = 0; i < players.length; i++) {
        let oldPlayer = players[i];
        let oldPlayerName = oldPlayer.name;
        if (oldPlayerName === playerName) {
            return res.send(
                "The player already Present in the array so don't add it again"
            );
        }
    }
    players.push(player);
    res.send({ data: players, status: true });
});

module.exports = router;
