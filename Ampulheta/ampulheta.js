/* Criar um programa para somar o valor das ampulheras que se formam na matriz, ex : abc
                                                                             d
                                                                            efg
e retornar o a maior;
ex 
-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0*/

 const testCase = [[-9,-9,-9,1,1,1],[0,-9,0,4,3,2],[-9,-9,-9,1,2,3],[0,0,8,6,6,0],[0,0,0,-2,0,0],[0,0,1,2,4,0]];
console.table(testCase)
 const somaAmpulheta = (arr)=>{
    let max = -1000;
    let soma = 0 ;
    for (let i = 0; i<6; i++){
        for (let j = 0; j<6; j++){
            if((j+2 <6)&&(i+2 < 6)){
                soma  = (arr[i][j] + arr[i][j+1]+ arr[i][j+2]) + (arr[i+1][j+1]) + (arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]);
                console.log(soma);
                if(max<soma){
                    max = soma;
                }
            }
        }
    }
    return max;
 }

 console.log(somaAmpulheta(testCase));