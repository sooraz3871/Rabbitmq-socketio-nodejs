const ampqplib = require('amqplib');

const {AMQP_URL:amqp_url} = process.env ; 

const channel = async() =>{
    try {
        const conn = await ampqplib.connect(amqp_url,"heartbeat=60");
        const ch = await conn.createChannel();
        return ch;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports ={channel};