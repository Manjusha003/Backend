const express = require('express');
const router = express.Router();
const cowinController= require("../controllers/cowinController")
const weatherController=require("../controllers/weatherController")
const memsController=require("../controllers/memsController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/sessionsByDistrictId", cowinController.getSessionsByDistrictId)
router.get("/openWeather/weatherOfLondon",weatherController.weatherOfLondon)

router.get("/openWeather/getTempOfLondon",weatherController.getTempOfLondon);
router.get("/openWeather/sortCitiesByTemp",weatherController.sortCitiesByTemp)


router.post("/memsGenerator",memsController.memsGenerator)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;