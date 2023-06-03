const express = require('express')
const jsonwebtoken = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('user')
const router = express.Router()

require('dotenv').config()

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body; 
    if (!name || !email || !password) {
        res.status(422).send({ error: 'fill details properly' })
    }
    else {
        User.findOne({ email: email }).then(
            async (saveduser) => {
                if (saveduser) {
                    res.status(422).send({ error: "user exists" })
                }
                else {
                    const user = new User({name, email, password })
                    try {
                        await user.save()
                        res.send({ message: "user saved successfully" })
                    }
                    catch (err) {
                        res.status(422).send({ error: "this is an error" + err})
                    }
                }
            }
            )
        }
    })
    
    router.post('/login', (req, res) => {
        console.log(req.body)
        // console.log(req.body)
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(422).send({ error: 'fill details properly' })
        }
        else {
            User.findOne({ email: email }).then(async (savedUser) => {
                if (!savedUser) {
                res.status(422).send({ error: 'user does not exist' })
            }
            else if (password === savedUser.password) {
                res.status(200).send({ message: 'login successful' })
            }
            else {
                res.status(422).send({ error: 'wrong password' })
            }
        }).catch((err) => {
            console.log(err)
            res.status(500).send({ error: 'internal server error' })
        })
    }
})


module.exports = router