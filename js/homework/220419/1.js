const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    let N = line.split(' ');
    switch (N[1]) {
        case '':
            console.log('실행 인자를 입력해 주세요\n예) {N} {연산자} {N}');
            break;
        case '+':
            console.log(Number(N[0]) + Number(N[2]));
            break;
        case '-':
            console.log(Number(N[0]) - Number(N[2]));
            break;
        case '*':
            console.log(Number(N[0]) * Number(N[2]));
            break;
        case '/':
            console.log(Number(N[0]) / Number(N[2]));
            break;
        case '%':
            console.log(Number(N[0]) % Number(N[2]));
            break;
    }

    rl.close();
})