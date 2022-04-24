const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
}).on('close', function () {
    let max = Math.max(...input);
    let newScores = [];
    for(let i in input) {
        newScores.push(Number(((input[i] / max) * 100).toFixed(2)));
    }
    let result = newScores.reduce(function add(a, b) {
        return a + b;
    }, 0);
    const average = (result / input[0]).toFixed(1);
    console.log(average);
    console.log(input);
    process.exit();
});
