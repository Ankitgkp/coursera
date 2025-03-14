
function createCourseRoutes(app){

    app.post("/course/purchase", function(req,res){
        res.json({
            message: "Signed endpoint"
        })
    })  


    app.get("/course/preview", function(req,res){
        res.json({
            message: "Signed endpoint"
        })
    })  

}

module.exports = {
    createCourseRoutes : createCourseRoutes
}

