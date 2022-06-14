function solution(phone) {

  let result = '';
  let arr = phone.split('').splice(2,8);
  for(let i=0; i < arr.length; i++){
    if(i === 0){
      result += '010-'+arr[i]
    } else if (i%4===0){
      result += '-'+arr[i]
    } else {
      result += arr[i]
    }
  }
  
  return result

}

console.log(solution("1062509911"));