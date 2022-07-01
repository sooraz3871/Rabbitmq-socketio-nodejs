const express = require('express')
const router = express.Router()

 //Health-Check of the Subscriber     
router.get('/health-check',(req,res)=>{

    const healthcheck = {
        uptime: process.uptime(),
        message: 'Subscriber-OK',
        timestamp: Date.now()
    };
    
    res.status(200).send(healthcheck);
})



module.exports={router}