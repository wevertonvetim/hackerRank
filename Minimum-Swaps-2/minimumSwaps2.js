const testCase = [7, 1, 3, 2, 4, 5, 6];

function minimumSwaps(arr) {
    let swaps = 0;
    let aux = 0;
    const arr2 = arr.slice().sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++){
        if (arr2[i]!==arr[i]){
            for(let j = i+1; j < arr.length; j++){
                if(arr2[i] == arr[j]){
                    swaps++;
                    aux = arr[j]
                    arr[j]= arr[i];
                    arr[i]= aux;
                }
            }       
        }    
    }
    return swaps; 
}

console.log(minimumSwaps(testCase))
