function countSugar(n) {
    let five = n % 5;
    let three = n % 3;
    let answer;
    if(! five) {
        answer = n / 5;
        // console.log( n / 5);
    } else if(! three) {
        if(five !== 3) {
            answer = n / 3;
            // console.log(n / 3);
        } else {
            answer = Math.round(n / 5);
            // console.log(Math.round(n / 5));
        }
    } else {
        if(five !== 3){
            answer = -1;
            // console.log(-1);
        } else {
            answer = Math.round(n / 5);
            // console.log(Math.round(n / 5));
        }
    }
    console.log(answer);
}
// countSugar(11);


function sugar(input){
    let result = -1;

// 먼저 큰 수가 몇 개나 들어가는지 계산
    let five = Math.floor(input / 5);
    while (five >= 0) {
        // 큰 수를 빼고 남은 킬로그램이 얼마인지
        const remain = input - five * 5;
        // 남은 킬로그램이 3으로 나누어 떨어진다면
        if (remain % 3 === 0) {
            // 최소 개수 구하기
            result = remain / 3 + five;
            break;
        } else {
            // 3으로 나누어 떨어지지 않으면 N킬로그램을 만들 수 없음
            // 큰 수를 하나 빼주고 개수를 다시 구해줌
            five -= 1;
        }
    }

// -1 혹은 구한 최소 개수 출력
    console.log(result);
}
// sugar(18);
