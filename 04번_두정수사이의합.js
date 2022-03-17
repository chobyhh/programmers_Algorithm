function solution(a, b) {
    var answer = 0;


    if (a == b) {
        answer = a;
    } else if (a < b){
        var c = a
        var d = b
        for (let i = c; i<d+1; i++){
            answer += i
        }
    } else if (a > b){
        var c = b
        var d = a
        for (let i = c; i<d+1; i++){
            answer += i
        }
    }


    return answer;
}

console.log(solution (3,10))