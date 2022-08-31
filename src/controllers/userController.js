const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req,res) {
 
  let userData = req.body;
  let allUsersData = await userModel.create(userData);
 
 res.send({ msg: allUsersData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
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
 
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};



const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
 
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};

const deleteUser=async function(req,res){
let userId=req.params.userId;
let userDetails=await userModel.findOneAndUpdate({userId},{isDeleted:true},{new:true});
res.send({msg:userDetails})
}




module.exports={createUser,getUserData,updateUser,loginUser,deleteUser}