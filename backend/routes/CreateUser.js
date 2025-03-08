const express = require('express')
const router = express.Router()
const User = require('../models/User')
const {body, validationResult} = require('express-validator')

const bcrypt = require("bcryptjs");

router.post("/",
    [body('email').isEmail(), // validation
    body('name').isLength({min:5}),
    body('password','Incorrect Password').isLength({min:5})]
    ,async (req,res)=>{
        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password,salt)

    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(400).json({errors: errors.array()});
        }

        await User.create({ // create user
            name : req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: secPassword
        })

        res.json({success:true});
    } catch (error) {
        console.log("Create User ERROR : ",error)
        res.json({success: false});
    }
})

module.exports = router
