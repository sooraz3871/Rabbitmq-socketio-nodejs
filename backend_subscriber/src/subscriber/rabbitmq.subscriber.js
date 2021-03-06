"use strict";

// const {channel:ch }= require('../helpers/rabbitmq.helper');
const ampqplib = require("amqplib");
const { filterByPriorityAndSend } = require("../helpers/filter.messages.helper");

exports.subscribe = async (socket) => {
  const { AMQP_URL: amqp_url ,AMQP_QUEUE: queue } = process.env;
   try {
    let rawMessage = [];
    console.log("<<<<<<< receiving >>>>>>>>>>");
    const conn = await ampqplib.connect(amqp_url,'heartbeat=60');
    const ch = await conn.createChannel();
    await ch.assertQueue(queue, { durable: true });
    await ch.consume(
      queue,
      function (msg) {
        rawMessage = msg.content.toString();
        filterByPriorityAndSend(rawMessage, socket);

        ch.ack(msg);
        
      },
      { consumerTag: "myconsumer" }
    );
  } catch (error) {    
    throw error;
  }
};

