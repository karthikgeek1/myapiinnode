const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.mongo_url, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log('db connected')
})