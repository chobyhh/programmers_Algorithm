function solution(numbers) {
    var ten = []

    for (i=0; i<10; i++){
        ten.push(i) 
    }
    var compare = ten.filter(x => !numbers.includes(x));

    var answer = compare.reduce((a,b) => (a+b));

    return answer;
}