function solution(arr1, arr2){
   let answer = [0, 0];

  for(let i=0; i<arr1.length; i++) {
    arr1[i] = arr1[i].split(':')
    arr2[i] = arr2[i].split(':')
  }

  for(let i=0; i<arr2.length; i++) {
    if(arr2[i][0] > 28) {
      arr2[i][0] = 21
      arr2[i][1] = 0
    }

    answer[0] += arr2[i][0] - arr1[i][0]
    answer[1] += arr2[i][1] - arr1[i][1]
  }

  while(answer[1] < 0) {
    answer[1] += 60
    answer[0] -= 1
  }

  console.log(arr1,arr2)
  
   return answer;
}
