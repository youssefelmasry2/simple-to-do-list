const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');


const app = express();
const PORT = 3000;

// Middleware
app.use(express.json())

// DB Connection
mongoose.connect('mongodb://admin:admin@localhost:27017/todo?authSource=admin')

const db = mongoose.connection;

db.on('error', () => {
    console.log("Connection Error!")
})

db.once('open', () => {
    console.log('Connected to DB!')
})

app.use(taskRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));