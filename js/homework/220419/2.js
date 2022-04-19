
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function(line) {
    //  여러 줄 입력
    input.push(line);

    if(line === '-1' && input.length < 3) {
        console.log('2개 이상의 과목을 입력해야 전체 평균을 구할수 있습니다.');
        input = [];
    } else if (line === '-1' && input.length >= 3) {
        rl.close();
    }
    //rl.close()가 없어서 계속 입력
    //로컬에서 입력을 중지하려면 입력을 한 후 ctrl+d로 입력 종료
}).on("close", function() {
    if(input.length > 1) {
        let newarr = [];

        for(let i = 0; i < input.length - 1; i++) {
            if(isNaN(input[i])) {
                console.log('점수는 숫자만 입력해 주세요.');
            } else {
                newarr.push(parseInt(input[i]));
            }
        }

        let sum = newarr.reduce(function (a, b) {
            return a + b;
        }, 0);
        let result = sum / newarr.length;
        console.log(result);

    }

    process.exit();
});