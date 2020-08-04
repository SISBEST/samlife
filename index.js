#! /usr/bin/env node

const colors = require('colors');
const { prompt } = require('enquirer');
var LocalStorage = require('node-localstorage').LocalStorage;
var store = new LocalStorage('./lifedata');

play();

async function play() {
    if (store.getItem('fname')) {
        console.log("Welcome back ".green + store.getItem('fname').green + " " + store.getItem('lname').green + "!".green);
    } else {
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
        store.setItem('fname', data.fname);
        store.setItem('lname', data.lname);
    }
    for (var year = store.getItem('year') || 0; year <= 100; year++) {
        store.setItem('year', year);
        console.log("Welcome to year ".green + year.toString().green + "!".green);
        for (var month = 0; month <= 12; month++) {
            // console.log(year + "." + month);
        }
    }
}