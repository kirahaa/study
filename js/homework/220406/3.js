const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
}).on('close', function () {
    for (let i = 1; i <= input[0]; i++) {
        let score = 1;
        let total = 0;
        for (let j = 0; j < input[i].length; j++) {

            if (input[i][j] === 'O') {
                total += score;
                score++;
            } else {
                score = 1;
            }
        }
        console.log(total);
    }
    console.log(input);
    process.exit();
});
