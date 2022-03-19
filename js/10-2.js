function permutation(a) {
    // 순열 목록(list)을 각 순열의 요소(element)로 추가하면서 갱신해 나간다.
    return a.reduce(function(list,element) {
        let newlist = [];
        // 각 순열(seq)별로 처리
        list.forEach(function(seq) {
            for(let i = seq.length; i >=0; i--) {
                let newseq = [].concat(seq); // newseq에 seq의 복사본을 저장
                newseq.splice(i, 0, element);  // newseq의 i번째 요소 앞에 element를 삽입
                newlist.push(newseq);  // newseq을 newlist의 끝에 추가
            }
        })
        return newlist;
    },[[]])
}
let a = [1, 2, 3];
permutation(a).forEach(function(v) {console.log(v)});