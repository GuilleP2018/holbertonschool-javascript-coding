#!/usr/bin/node
const fs = require('fs');
const process = require('process');

let filePath = process.argv[2];
let content = process.argv[3];

fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
});