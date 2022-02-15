let score = 1;
for(let i = 0; i <= score; i++){
    score = prompt('점수를 입력하세요');
    if(score <= 100 && score >= 90) {
        console.log("A");
    } else if (score <= 89 && score >= 80) {
        console.log("B");
    } else if (score <= 79 && score >= 70) {
        console.log("C");
    } else if (score <= 69 && score >= 69) {
        console.log("D");
    } else {
        console.log("F");
    }
}





