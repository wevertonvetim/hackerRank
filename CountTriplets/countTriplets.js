const testCase = [[1, 5, 5, 25, 125], 5];

function countTriplets(arr, r) {
  let count = 0;
  const map = {};
  const doubles = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    let x = arr[i];
    let rx = x * r;
    let r2x = rx * r;
    let par = [rx, r2x];
    console.log(par)
    console.log(doubles[par])
    if (doubles[par] !== undefined) {
      count = count + doubles[par];
    }
    let doub = [x, rx];
    if (doubles[doub] == undefined) {
        doubles[doub] = 0;
    }
    doubles[doub] = doubles[doub] + (map[rx] == undefined ? 0 : map[rx]);
    map[x] == undefined ? (map[x] = 1) : map[x]++;
  }
  return count;
}


console.log(countTriplets(testCase[0], testCase[1]));
