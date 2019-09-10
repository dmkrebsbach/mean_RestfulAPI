const home = require("../controllers/tasks");

module.exports = function(app){
    app.get("/", (req, res)=>{
        home.index(req, res);
    });

    app.get("/tasks", (req, res)=>{
        home.index(req, res);
    });

    app.get("/tasks/:id", (req, res)=>{
        home.displayTask(req, res);
    });

    app.post("/tasks", (req, res)=>{
        home.createTask(req, res);
    });

    app.put("/tasks/:id", (req, res)=>{
        home.updateTask(req, res);
    });

    app.delete("/tasks/:id", (req, res)=>{
        home.deleteTask(req, res);
    });
}