const mongoose = require('mongoose');

// Connect to MongoDB using Promise syntax (no callback)
mongoose.connect('mongodb://localhost:27017/StudentDB', {
    useNewUrlParser: true,
})
.then(() => {
    console.log('MongoDB connection succeeded.');
})
.catch((err) => {
    console.log('Error in DB connection: ' + JSON.stringify(err, undefined, 2));
});

require('./student.model');