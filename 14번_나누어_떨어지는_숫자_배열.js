var testArray = [1,2,3,4]

function solution(arr, divisor) {
    var answer = [];
    var arr = [1,2,3,4]
    for(let i=0; i < arr.length; i++){
        if(Number(arr[i])%divisor === 0){
            answer.push(arr[i])
        } 

    } 


    return Number(answer) === 0 ? [-1] : answer.sort((a,b) => a - b);
}

console.log(solution(testArray, 2));