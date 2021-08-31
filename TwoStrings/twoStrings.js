testCase = ["and", "alt"];

function twoStrings(string1, string2) {
  let aux = string1.split("");
  let map = {};
  aux.map(valor=> map[valor]=valor);
  for (let index = 0; index < string2.length; index++){
    if(map[string2[index]]){
      return 'YES'
    }
  }
  return 'NO'
}

console.log(twoStrings(testCase[0], testCase[1]));
