const { Router } = require("express");
const userRouter = Router();
const {userModel} = require("../database")
const jwt = require("jsonwebtoken")
const { JWT_USER_PASSWORD } = require("./config")


    userRouter.post("/signup", async function(req,res){
        const { email, password, firstName, lastName } = req.body;

        await userModel.create({
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastName
        })

        res.json({
            message: "Signup succeeded"
        })
    })  

    userRouter.post("/signin", async  function(req,res){
        const { email, password } = req.body;

        const user = await userModel.findOne({
              email:email,
              password:password    
        });
        if(user){
            const token = jwt.sign({
                id: user._id
            }, JWT_USER_PASSWORD);

            res.json({
                token: token,

            }) 
        } else {{
            res.status(403).json({
                message: "Incorrect Credentials"
            })
        }}
    })  

    userRouter.get("/purchases", function(req,res){
        res.json({
            message: "Purchases endpoint"
        })
    })  


module.exports = {
    userRouter: userRouter
}
