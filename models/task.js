const mongoose = require('mongoose');

/* Creating Schema */
const taskSchema = new mongoose.Schema({
    task : {
        type: String,
        required: true,
    },
    category : {
        type: String,
        required: true,
    },
    date : {
        type: String,
        required: true,
    }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;