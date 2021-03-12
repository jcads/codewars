// 'world'  =>  'dlrow'
// this solution uses recursion

function solution(str){
  if (str === "") return str;
  else 
    return solution(str.substr(1)) + str.charAt(0);
}
