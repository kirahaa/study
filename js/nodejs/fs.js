/*
* fs 모듈
* fs 모듈은 FileSystem의 약자로 파일 처리와 관련된 모듈이다.
* */

let fs = require('fs');

// 문자 하나만 입력받을 경우
var input = fs
    .readFileSync('/dev/stdin')
    .toString();

// 한칸 띄어쓰기로 구분
// input[0], input[1] 배열에서 꺼내쓰면 된다.
var input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .split(' ');

// 줄바꿈으로 구분
var input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .split('\n');

// 만약 인풋값이 숫자라면
var input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .split(' ')
    .map(function(a) {
        return +a
    });
