"use strict";

const randomWords = require("random-words");

exports.randomMessageGenerator = () => {
  let randomMsg = [];

  for (let index = 0; index < 20; index++) {
    const randomPhrase = randomWords({ exactly: 5, join: " " });

    const timestamp = getTimeStamp();
    const priority = getRandomInt(1, 11);

    const messageObj = {
      message: randomPhrase,
      timestamp: timestamp,
      priority: priority,
    };
    randomMsg = [...randomMsg, messageObj];
  }

  return randomMsg;
};

const getTimeStamp = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return today.toISOString();
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};


