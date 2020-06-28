"use strict"

const getRandomLetter = function () {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

    let randChar = '';
    
    let random = Math.floor(Math.random() * chars.length);
           
    randChar = chars.substring(random, random +1);

    return randChar;
};

console.log(getRandomLetter());