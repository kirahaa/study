const args = process.argv;

switch (args[3]) {
    case undefined:
        console.log('실행 인자를 입력해 주세요\n예) {N} {연산자} {N}');
        break;
    case '+':
        console.log(Number(args[2]) + Number(args[4]));
        break;
    case '-':
        console.log(Number(args[2]) - Number(args[4]));
        break;
    case '*':
        console.log(Number(args[2]) * Number(args[4]));
        break;
    case '/':
        console.log(Number(args[2]) / Number(args[4]));
        break;
    case '%':
        console.log(Number(args[2]) % Number(args[4]));
        break;
}