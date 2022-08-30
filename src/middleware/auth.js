const authenticate = function (req, req, next) {

    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["x-auth-token"];


    if (!token) return res.send({ status: false, msg: "token must be present" });

    console.log(token);

    let decodedToken = jwt.verify(token, "functionup-Plutonium");
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });

    req.decodedToken = decodedToken;

    next()
}


const authorise = async function (req, res, next) {
    // comapre the logged in user's id and the id in request

    let userToBeModified = req.params.userId

    let userLoggedIn = decodedToken.userId


    if (userToBeModified != userLoggedIn)
        return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

    let user = await userModel.findById(req.params.userId)
    if (!user) return res.send({ status: false, msg: 'No such user exists' })

    next()
}

module.exports = { authenticate, authorise }