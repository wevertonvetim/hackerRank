/* Uma operação de rotação para a esquerda em uma matriz muda cada um dos elementos da matriz 1 unidade à 
esquerda. Por exemplo, se 2 rotações à esquerda são realizadas na matriz [1,2,3,4,5], então a matriz se 
tornaria [3,4,5,1,2]. Observe que o item de índice mais baixo se move para o índice mais alto em uma rotação. 
Isso é chamado de matriz circular.*/
const testCase = [1,2,3,4,5];

const leftRotation = (arr,rotation)=>{
    let aux;
    for(let i = 0; i<rotation; i++){
        aux = arr[0];
        for (let j = 0;j<arr.length-1; j++){
            arr[j] = arr[j+1];
        }
        arr[arr.length - 1] = aux;
    }
    return arr;
}
9
console.log(leftRotation(testCase,2))