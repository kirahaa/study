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

function countWord2(input) {
   if(input.length > 1000000) {
       console.log('길이가 1,000,000 이하의 문자를 입력하세요');
       return;
   } else {
       console.log(
           [...new Set(input.split(' '))].filter(item => item !== '').length
       );
   }
}
countWord2('asd asd ddd sa');