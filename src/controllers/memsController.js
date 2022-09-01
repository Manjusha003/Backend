let axios = require("axios");

const memsGenerator = async function (req, res) {
   try {
    let options={
        method:"post",
        url:"https://api.imgflip.com/caption_image?template_id=181913649&text0=Hello&text1=Bye&username=ManjushaRaut&password=@11Manjusha"
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
module.exports = { memsGenerator };