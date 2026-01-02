const express = require('express');
const dbConnect = require('./config/database');

const app = express();

require('dotenv').config();
app.use(express.json());
app.use(require('cookie-parser')());
const routes = require('./routes');
app.use('/api/v1' , routes);
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`app listening to port number ${port}`);
})

dbConnect();
