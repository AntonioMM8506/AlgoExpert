function bubbleSort(array) {
    let res = [...array];
    let temp;

    for(let m=0; m<array.length; m++){
        for(let n=0; n<array.length; n++){
            //If the next element is smaller than the current element, then a swap
            //is needed, for that, we use a temporary variable
            if(res[n+1]<res[n]){
                temp = res[n+1];
                res[n+1] = res[n];
                res[n] = temp;
            }
        }
    }

    console.log(res);
    return res;
}//End of bubbleSort


//Test Cases
bubbleSort([8, 5, 2, 9, 5, 6, 3]);
bubbleSort([1]);
bubbleSort([3, 1, 2]);
bubbleSort([8, -6, 7, 10, 8, -1, 6, 2, 4, -5, 1, 10, 8, -10, -9, -10, 8, 9, -2, 7, -2, 4]);
