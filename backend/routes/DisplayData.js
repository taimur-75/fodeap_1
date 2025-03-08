const express = require('express')
const router = express.Router()

router.post("/",(req,res)=>{
    try {
        res.send([global.food_items,global.foodCategory])
    } catch (error) {
        console.error(error);
        res.send("Server Error.")
    }
})

module.exports = router
