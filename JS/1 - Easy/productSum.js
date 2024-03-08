//Recursive solution. The sum starts with 0, in each iteration all the elements in the sub-array are 
//added, and at the end multiplied by the multiplier, that it increments its value +1 in each call.
function productSum(array, m=1) {
    let sum = 0;

    for(let i=0; i<array.length; i++){
        if(Array.isArray(array[i])){
            sum += productSum(array[i], m+1 );
        }else{
            sum += array[i];
        }
    }

    console.log(m*sum)
    return m*sum;

}//End of productSum


productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]); //12
productSum([1, 2, 3, 4, 5]); //15
productSum([[1, 2], 3, [4, 5]]); //27
productSum([[[[[5]]]]]); //600
productSum([9, [2, -3, 4], 1, [1, 1, [1, 1, 1]], [[[[3, 4, 1]]], 8], [1, 2, 3, 4, 5, [6, 7], -7], [1, [2, 3, [4, 5]], [6, 0, [7, 0, -8]], -7], [1, -3, 2, [1, -3, 2, [1, -3, 2], [1, -3, 2, [1, -3, 2]], [1, -3, 2]]], -3]); //1351

