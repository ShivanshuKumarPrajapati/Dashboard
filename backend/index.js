require('dotenv').config();
const express = require('express');
const mongoose =require('mongoose');
const cors = require('cors');

const userRouter = require('./routers/user');
const userDataRouter = require('./routers/userData');

const app = express();
const port = process.env.PORT || 5000;
const url = process.env.DB_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(url).then(() => {
    console.log('DB connected successfully');
}).catch(err => {
    console.log(err);
});


app.use('/api', userRouter);
app.use('/api', userDataRouter);

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});