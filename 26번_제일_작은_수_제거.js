function solution(arr) {

    var min = Math.min(...arr)
    var idx = arr.indexOf(min);

    if(arr.length === 1){
        return [-1];
    } else {
        arr.splice(idx, 1)
        return arr

}

console.log(solution([4,3,2,1]))