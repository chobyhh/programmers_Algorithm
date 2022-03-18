 arr
   function solution(phone_number) {
    var answer = '';
    let arr = phone_number.split("")

    for(let i = 0; i < arr.length; i++){

        (i < (arr.length-4) ? answer = answer + '*' : answer = answer + arr[i])

    }

    return answer;
}

console.log("결과 : " + solution('01033334444'));