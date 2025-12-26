const mongoose = require('mongoose');

const dbConnect = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log(`MongoDb connection successful`);

    })
    .catch(e=>{
        console.log('something went wrong while connecting to the database');
        console.error(e);
        
        process.exit(1);


    })
}

module.exports= dbConnect;