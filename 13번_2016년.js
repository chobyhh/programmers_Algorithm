function solution(a, b) {
    var answer = '';
    let weeks = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let days = [31,29,31,30,31,30,31,31,30,31,30,31];
    let num = 0;
    
    for (let i = 0; i < a-1; i++){
        num += Number(days[i])
    }
    return weeks[(num+b+4)%7]
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(solution(2,24));