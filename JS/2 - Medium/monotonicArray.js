function isMonotonic(array) {
    let res;
    //We are going to assume that they are in the correct order, wheter NI or ND
    let nonIncreasing = true;
    let nonDecreasing = true;

    for(let i = 0; i<array.length-1; i++){
        if(array[i]<array[i+1]){
            //if the next element is bigger, then it is increasing
            nonIncreasing = false;
        }
        if(array[i]>array[i+1]){
            //if the next element is lesser, then it is decreasing
            nonDecreasing = false;
        }
    }

    //A + B = A // true + false = true
    res = nonDecreasing || nonIncreasing;
    console.log(res);
    return res;
}


isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]);//true
isMonotonic([]);//true
isMonotonic([1]);//true
isMonotonic([1, 2]);//true
isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -9001]);//false
