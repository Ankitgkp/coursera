const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../routes/config")
function userMiddleware(req, res,next){
    const token = req.headers.token; 
    const decocde = jwt.verify(token , JWT_USER_PASSWORD);

    if(decocde){
        req.userId = decocde.id;
        next()
    } else{
        res.status(403).json({
            message: "You are not signed in"
        })
    }

}


module.exports = {
    userMiddleware: userMiddleware
}