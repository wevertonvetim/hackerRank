const testCase = [[1, 5, 5, 25, 125], 5];

function countTriplets(arr, r) {
  let count = 0;
  const map = {};
  const doubles = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    let valorX = arr[i];
    let razaoXR = valorX * r;
    let razaoXRR = razaoXR * r;
    let par = [razaoXR, razaoXRR];
    if (doubles[par] !== undefined) {
      count = count + doubles[par];
    }
    let doub = [valorX, razaoXR];
    if (doubles[doub] == undefined) {
        doubles[doub] = 0;
    }
    doubles[doub] = doubles[doub] + (map[razaoXR] == undefined ? 0 : map[razaoXRR]);
    map[valorX] == undefined ? (map[valorX] = 1) : map[valorX]++;
  }
  return count;
}


console.log(countTriplets(testCase[0], testCase[1]));
