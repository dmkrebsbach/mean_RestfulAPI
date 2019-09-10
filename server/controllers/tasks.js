const mongoose = require("mongoose");
const Task = require("../models/task");

module.exports = {
    index: (req, res)=>{
        Task.find()
            .then((tasks)=>{
                return res.json(tasks);
            });
    },

    displayTask: (req, res)=>{
        Task.findOne({_id: req.params.id})
            .then((task)=>{
                return res.json(task);
            });
    },

    createTask: (req, res)=>{
        let task = new Task();
        task.title = req.body.title;
        task.description = req.body.description;
        task.save()
            .then((newTask)=>{
                return res.redirect("/");
            });
    },

    updateTask: (req, res)=>{
        Task.updateOne({_id: req.params.id}), {
            name: req.body.name,
            description: req.body.description
        }
            .then(()=>{
                return res.redirect("/");
            });
    },

    deleteTask: (req, res)=>{
        Task.remove({_id: req.params.id})
            .then((task)=>{
                return res.redirect("/");
            });
    }
}