"use strict";

const ampqplib = require("amqplib");
const { randomMessageGenerator } = require("../helpers/randomwords.helper");

exports.PublishMessage = () => {
  const message = randomMessageGenerator();

  publishToQue(message).catch(() =>
   console.log("Establishing connection to Rabbitmq")
  );

};

const publishToQue = async (msg) => {
 
  const {
    AMQP_URL: amqp_url,
    AMQP_EXCHANGE: exchange,
    AMQP_QUEUE: queue,
    AMQP_ROUTING_KEY: routingKey,
  } = process.env;
  try {
    const conn = await ampqplib.connect(amqp_url, "heartbeat=60");

    const ch = await conn.createChannel();
    await ch.assertExchange(exchange, "direct", { durable: true });
    await ch.assertQueue(queue, { durable: true });
    await ch.bindQueue(queue, exchange, routingKey);
    await ch.publish(exchange, routingKey, Buffer.from(JSON.stringify(msg)));
  } catch (error) {
    // console.log(error);
    throw error;
  }
};


