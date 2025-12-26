const express = require('express');
const dbConnect = require('./config/database');

const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`app listening to port number ${port}`);
})

dbConnect();
