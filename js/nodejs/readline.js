/*
* readline 모듈
* readline은 js 내장 모듈로, 한 번에 한 줄씩 Readable 스트림 (예: process.stdin)에서 데이터를 읽기 위한 인터페이스를 제공한다.
* 처음 생성 시  createInterface를 통해  input, output을 설정해준다.
* 다음에, 입력을 갖고 처리할 callback 함수인 function(line)을 설정해준다.
* */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    console.log(line);  // 입력 값을 처리할 callback 내용 기제

    rl.close();  // callback 종료
}).on('close', function () {
    process.exit(); // 출력과 관련된 내용 기재 (console.log 같은 거...)
})

// 매개 변수 line 에 할당되는 내용이 입력값이다. (문자열로 할당)

/*
* close()
* 입력을 원하는 만큼 받기 위해서는 원하는 조건을 입력한 후,  rl.close를 기재하면 된다.
* 즉, rl.close()는 말 그대로 입력을 멈추는 기능을 하는 것
* */
