const Task = require("./taskModel");

const setTask = (req, res) => {
    Task.create({
        task: req.body.task,
    }).then(task => {
        res.status(200).json(task);
    })
    .catch(err=> {
        res.json(err);
    })
}

const getTasks = (req, res) => {
    Task.find()
    .then(tasks=> {
        res.json(tasks);
    })
    .catch(err => {
        res.json(err);
    })
}

const updateTask = (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    .then(updatedTask => {
        res.json(updatedTask);
    })
    .catch(err => {
        res.json(err);
    })
}

const deleteTask = (req, res) => {
    Task.findByIdAndDelete(req.params.id)
    .then(task => {
        res.json(task);
    })
    .catch(err => {
        res.json(err);
    })
}

module.exports = {setTask, getTasks, updateTask, deleteTask};