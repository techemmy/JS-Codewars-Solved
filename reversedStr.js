function solution(str){
  let reversedStr = ''
  
  // loop backwards from the last element in `str` to the first element
  // and append it to the reversedStr output
  for (let i = str.length - 1; i >= 0; --i) {
    reversedStr += str[i]
  }
  
  return reversedStr
}

// test case
console.log(solution("olleh"))
