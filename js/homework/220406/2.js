function getScore(length, ...scores) {
    let sum = 0;
    let count = 1;

    for(let i in scores) {
        for(let j in scores[i]) {
            if(scores[i][j] === "O") {
                sum += count;
                count++;
            } else {
                count = 1;
            }
        }
    }
    console.log(sum);
}
getScore(3, "OOXXOXXOOO", "OOXXOOXXOO", "OXOXOXOXOXOXOX");