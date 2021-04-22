require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

// Middelware
app.use(cors());
app.use(express.json());
app.use(cookieParser())

// MongoDB
const URI = process.env.CONNECTING_URI;

mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database Connecting');
})

// Routes
app.use('/api', require('./routes/productRouter'));
app.use('/opinions', require('./routes/opinionRoutes'));
app.use('/user', require('./routes/userRoutes'));

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})