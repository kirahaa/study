function countAlphabet(word) {
    let w = word.toUpperCase().split('');
    let result = "?";
    let countWord = w.reduce(function (count, alphabet) {
        if (alphabet in count) {
            count[alphabet]++;
        } else {
            count[alphabet] = 1;
        }
        return count;
    }, {});
    let arr = Object.values(countWord);
    let max = Math.max(...arr);
    let counts = 0;
    for(let keys in countWord) {
        if(countWord[keys] === max) {
            counts++;
            result = keys;
        }
    }
    if(counts === 1) {
        console.log(result);
    } else {
        console.log("?");
    }

}

// countAlphabet("mississipi");
// countAlphabet("baaa");
countAlphabet("zZa");

