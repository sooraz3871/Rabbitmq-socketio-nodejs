'use strict'

const ampqplib = require("amqplib");

const publish = async (msg) => {
  const { AMQP_URL: amqp_url } = process.env;
  const {
    AMQP_EXCHANGE: exchange,
    AMQP_QUEUE: queue,
    AMQP_ROUTING_KEY: routingKey,
  } = process.env;
  try {
    const conn = await ampqplib.connect(amqp_url,'heartbeat=60');
    const ch = await conn.createChannel();
    await ch.assertExchange(exchange, "direct", { durable: true });
    await ch.assertQueue(queue, { durable: true });
    await channel.bindQueue(queue, exchange, routingKey);
    await ch.publish(exchange, rkey, Buffer.from(JSON.stringify(msg)));
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { publish };
