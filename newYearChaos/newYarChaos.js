const testCase = [1, 2, 5, 3, 7, 8, 6, 4]
/*
test 0
[2, 1, 5, 3, 4] = 3
[2, 5, 1, 3, 4] = too chaotic

test 1
[5, 1, 2, 3, 7, 8, 6, 4] = too chaotic
[1, 2, 5, 3, 7, 8, 6, 4] = 7

test 11
[1, 2, 5, 3, 4, 7, 8, 6] = 4

let cont = 0;
   for (let i = q.length-1; i >= 0; i--){
       if(q[i]-(i+1) >= 3){
                console.log( "Too chaotic");
                return;
        }
       for (let j = 0; j < i; j++){
           if (q[j] > q[i]){
               cont++;
           }
       }
   }
   console.log(cont);
   return;
*/ 


function minimumBribes(testCase) { 
    let suborno = 0;
   for (let indice = testCase.length-1; indice >= 0; indice--){
       if(testCase[indice]-(indice+1) >= 3){
                console.log( "Too chaotic");
                return;
        }
       for (let lugarAhFrente = 0; lugarAhFrente < indice; lugarAhFrente++){
           if (testCase[lugarAhFrente] > testCase[indice]){
               suborno++;
           }
       }
   }
   console.log(suborno);
   return;   
}

minimumBribes(testCase);

