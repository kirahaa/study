function calcAverage(length, ...scores) {
    let max = Math.max(...scores);
    let newScores = [];
    for(let i in scores) {
        newScores.push(Number(((scores[i] / max) * 100).toFixed(2)));
    }
    let result = newScores.reduce(function add(a, b) {
        return a + b;
    }, 0);
    const average = (result / length).toFixed(1);
    console.log(average);
}
calcAverage(3, 40, 80, 60);