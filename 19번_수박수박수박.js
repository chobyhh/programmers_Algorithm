function solution(n) {

    return ((n%2) === 0 ? "수박".repeat(n/2) : "수박".repeat(n/2)+"수");
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ solution(3))
console.log("n이 4인 경우: "+ solution(4))