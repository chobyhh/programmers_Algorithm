var testArray = [1,2,3,4] 

function solution(arr) {
    const sum = arr.reduce((a,b) => (a+b));
    const len = arr.length
    const answer = sum/len
    return answer;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.

console.log("평균값 : " + solution(testArray));

//call back 함수?