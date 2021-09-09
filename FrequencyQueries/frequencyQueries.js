const testCase = [
  [1, 3],
  [2, 3],
  [3, 2],
  [1, 4],
  [1, 5],
  [1, 5],
  [1, 4],
  [3, 2],
  [2, 4],
  [3, 2],
];

const mudaFrequenica = (valor, map, operacao) => {
  map[valor] === undefined ? (map[valor] = 1) : map[valor]++;
  map[valor + operacao] !== undefined && map[valor + operacao] <= 1
    ? (map[valor + operacao] = undefined)
    : map[valor + operacao]--;
  return map;
};

function freqQuery(queries) {
  let frequencia = {};
  let map = {};
  for (comando of queries) {
    switch (comando[0]) {
      case 1:
        console.log('entrou no 1 ' + "comando: " + comando)
        map[comando[1]] == undefined
          ? (map[comando[1]] = 1)
          : map[comando[1]]++;
        frequencia = mudaFrequenica(map[comando[1]], frequencia, -1);
        break
      case 2:
        console.log('entrou no 2 ' +  "comando: " + comando )
        map[comando[1]] !== undefined && map[comando[1]] <= 1
          ? (map[comando[1]] = undefined)
          : map[comando[1]]--;
        frequencia = mudaFrequenica(map[comando[1]], frequencia, +1);
        break

      case 3:
        console.log('entrou no 3 ' +  "comando: " + comando[0] + " valor do comando: " + comando[1]  )
        frequencia[comando[1]] === undefined
          ? console.log("0")
          : console.log("1");
          break
    }
  }
}

freqQuery(testCase);
