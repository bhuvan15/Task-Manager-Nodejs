//Modules
const express = require('express');
const path = require('path');
const db = require('./config/mongoose');
const Task = require('./models/task');

//Port Number
const PORT = 8000;

/* Initializing app */
const app = express();

/* Middlewares */
app.use(express.static('assets'));
app.use(express.urlencoded());

/* Setting up view engine */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* Routes and Controllers */
app.get('/', function(req, res) {
    Task.find({}, function(err, tasks) {
        if(err) {
            console.log('Erro in fetching data from db');
            return;
        }
        return res.render('home', {
        tasks : tasks,
    });
    })
})


/* form data */
app.post('/add_task', function(req, res) {
    console.log(typeof(req.body.date));
    const taskF = req.body.task;
    const categoryF = req.body.category;
    const dateF = req.body.date;

    Task.create({
        task : taskF,
        category : categoryF,
        date : dateF
    }, function(err, newTask) {
        if(err) {
            console.log("error in fetching data form db");
            return;
        }
        console.log("*****" + newTask);
        return res.redirect('/');
    });
    
})


/* Delete Task */
app.get('/delete_task', function(req, res) {
    let id = req.query.id;
    Task.findByIdAndDelete(id, function(err) {
        if(err) {
            console.log("error in deleting the task");
            return;
        }
    })
    return res.redirect('/');
})




app.listen(PORT, function(err) {
    if(err) {
        console.log(`${err} on port ${PORT}`);
        return;
    }
    console.log(`Server running on port ${PORT}`);
})