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

let N = 3;
// 1부터 NxN의 요소를 가진 배열 a를 생성
for(let i = 1, a = []; i <= N*N; i++) a = a.concat(i);
// NxN인 2차원 배열을 생성
let m = new Array(N);
for(let i = 0; i < N; i++) m[i] = new Array(N);
// a의 순열을 생성하고 각각의 순열 p로 2차원 배열 m을 만든다. 그리고 m이 마방진인지 판정한다.
permutation(a).forEach(function (p) {
    // 순열(1차원 배열) p를 2차원 배열 m에 복사
    for(let i = 0, index = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            m[i][j] = p[index++];
        }
    }
    // 마방진이면 출력
    if( isMagicSquare(m) ) {
        m.forEach(function (v) {console.log(v);});
        console.log(15);
    }
});
// 정방 행렬 m이 마방진인지 판정하는 함수
function isMagicSquare(m) {
    let n = m.length;
    let s = n * (n * n + 1) / 2;
    let sumDiagnalR = 0;
    let sumDiagnalL = 0;
    for(let i = 0; i < n; i++) {
        let sumRow = 0;
        let sumColumn = 0;
        for(var j = 0; j < n; j++) {
            sumRow += m[i][j];
            sumColumn += m[j][i];
        }
        if(sumRow != s || sumColumn != s) return false;
        sumDiagnalR += m[i][j];
        sumDiagnalL += m[i][n - i - 1];
    }
    if(sumDiagnalR != s || sumDiagnalL != s) return false;
    return true;
}
