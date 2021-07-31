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
*/ 


function minimumBribes(q) {
   let cont = 0;
   for (let i = q.length-1; i >= 0; i--){
       if(q[i]-(i+1) >= 3){
                return "Too chaotic";
        }
       for (let j = 0; j < i; j++){
           if (q[j] > q[i]){
               cont++;
           }
       }
   }
   return cont;
}

console.log(minimumBribes(testCase));

