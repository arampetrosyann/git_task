"use strict"

const getRandomNumber = function () {
    const random = Math.floor((Math.random() * 100) + 1);

    return random;
};

console.log(getRandomNumber());