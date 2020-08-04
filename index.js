#! /usr/bin/env node

const colors = require('colors');
const { prompt } = require('enquirer');

play();

async function play() {
    var data = await prompt([
        {
            type: 'input',
            name: 'fname',
            message: 'First Name',
            required: true
        },
        {
            type: 'input',
            name: 'lname',
            message: 'Last Name',
            required: true
        }
    ]);
    console.log("Hello ".green + data.fname.green + " " + data.lname.green + "!".green);
}