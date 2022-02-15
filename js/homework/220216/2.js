function countWord(sentence) {
    let splitword = sentence.split(' ');
    let result = 0;
    for(let i in splitword) {
        if(splitword[i] !== '') {
            result++;
        }
    }
    console.log(result);
}
// countWord("The Curious Case of Benjamin Button");
// countWord(" The first character is a blank");
countWord("The last character is a blank ");