/*
* readline 여러줄 입력받을 경우
* */

const readline = require('readline');

const rl =   readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    console.log(input);
    process.exit();
})