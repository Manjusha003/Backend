const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


// Register users -->POST API
const createUser = async function (req, res) {
  try{
  let userData = req.body;
  if ( Object.keys(userData).length != 0) {
  let allUsersData = await userModel.create(userData);
  res.status(201).send({ msg: allUsersData })
  }
  else res.status(400).send({ msg: "user details important"})
}
 
catch (err) {
  console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
};

// Login -->POST API
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not correct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Plutonium",
      organisation: "FunctionUp",
    },
    "functionup-Plutonium"
  );

  res.status(200).send({ status: true, data: token });
};



// Get user -->GET API
const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(400).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
};


//update user -->PUT API
const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.status(400).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(200).send({ status: updatedUser, data: updatedUser });
};

//delete user -->DELETE API
const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findOneAndUpdate({ userId }, { isDeleted: true }, { new: true });
  if(!userDetails){
    return res.status(400).send({msg:"user not found !!"})
  }
  res.status(200).send({ msg: userDetails })
}




module.exports = { createUser, getUserData, updateUser, loginUser, deleteUser }