// const express = require('express')
// const bodyparser = require('body-parser')
// const cors = require('cors')

// require('./Models/user')
// require('./db.js')

// const authroutes=require('./AuthRoutes/AuthRoutes')
// const app = express()

// app.use(cors())
// app.use(express.json())
// app.use(authroutes) 

// app.get('/', (req, res)=>{
//     res.send('hello world 234')
// })

// app.listen(9000, ()=>{
//     console.log('listening on 9000')
// })

const express = require('express')
const app = express()
const cors = require('cors')

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.get('/services', (req,res)=>{
    res.send('this is services route')
})

app.listen(3000, ()=>{
    console.log('listening 3000')
})