function solution(n, m) {
    var answer = [];

    let Greatest = 0;
    let Least = 0;
    let num = 0;

    n > m ? num = n : num=m;

    for(let i = 1; i<= num; i++){
        (n%i === 0 && m%i===0)
        ? Greatest = i : null
    }
    Least = n*m / Greatest;
    answer = [Greatest,Least];
    return answer;
}