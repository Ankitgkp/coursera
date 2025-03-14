const { Router } = require("express");

const userRouter = Router();
 
    userRouter.post("/signup", function(req,res){
        res.json({
            message: "Signed endpoint"
        })
    })  

    userRouter.post("/signin", function(req,res){
        res.json({
            message: "Signed endpoint"
        })
    })  

    userRouter.get("/purchases", function(req,res){
        res.json({
            message: "Signed endpoint"
        })
    })  


module.exports = {
    userRouter: userRouter
}
