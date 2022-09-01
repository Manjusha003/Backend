
let axios = require("axios")

const weatherOfLondon=async function(req,res){
    try{
        let API_KEY="2d5f41688a688925a7f29bdc2c9ad5eb"
        let options={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`
        }
        let result = await axios(options);
      
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const API_KEY="2d5f41688a688925a7f29bdc2c9ad5eb"
const getTempOfLondon=async function (req,res){
    try{
        // let API_KEY="2d5f41688a688925a7f29bdc2c9ad5eb"
        let options={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=London&appid="2d5f41688a688925a7f29bdc2c9ad5eb"`
        }
        let result = await axios(options);
      
        let data = result.data
        let temp=data.main.temp
        res.status(200).send({ temp:temp, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


const sortCitiesByTemp=async function(req,res){
    try{
        let cities= [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        let cityTempArr=[];
         for(let i=0;i<cities.length;i++){
            let obj={city:cities[i]}
            let result=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=2d5f41688a688925a7f29bdc2c9ad5eb`)
            console.log(result.data.main.temp)
            obj.temp=result.data.main.temp;
           
         
         cityTempArr.push(obj)
         }
         let sortedArr=cityTempArr.sort(function(a,b){return a.temp-b.temp})
         res.status(200).send({msg:sortedArr,status:true})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports={weatherOfLondon,getTempOfLondon,sortCitiesByTemp}