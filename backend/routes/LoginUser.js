const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const jwtSecret = "gdryfcytvugdrtdrydnr"

router.post("/",
    [body('email').isEmail(), // validation
    body('password', 'Incorrect Password').isLength({ min: 5 })],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;
        try {
            let userdata = await User.findOne({ email });
            if (!userdata) {
                return res.status(400).json({ errors: "User doesn't exist !" });
            }
            let pwCompare = await bcrypt.compare(req.body.password, userdata.password)
            if (!pwCompare) {
                return res.status(400).json({ errors: "Wrong Password !" });
            }

            const data = {
                userId:{
                    id: userdata.id
                }
            }
            const authToken = jwt.sign(data,jwtSecret)

            return res.json({ success: true, authToken: authToken });
        } catch (error) {
            console.log("Create User ERROR : ", error)
            res.json({ success: false });
        }
    })

module.exports = router
