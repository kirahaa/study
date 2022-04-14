
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function(line) {
    input.push(line)
    if(line === '-1') {
        rl.close();
    }
    //rl.close()가 없어서 계속 입력
    //로컬에서 입력을 중지하려면 입력을 한 후 ctrl+d로 입력 종료
}).on("close", function() {
    for ( let i in input) {
        console.log(input[i-1]);
    }
    // let result = input.reduce(function (a,b) {
    //     return a + b;
    // }, 0);
    // const average = (result / (input.length - 1));
    // console.log(average);
    process.exit();
});