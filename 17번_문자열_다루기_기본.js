function solution(s) {
 
    if(s.length ===4 || s.length ===6){
        if (s.includes('e')){
            return false
        } else if(s.split("").reduce((a,b) => (a+b)) >= 0){
            return true
        } else {
            return false
        }
    } else {
        return false
    }
 
}

console.log( solution("1234") );