function twoNumberSum(array, targetSum) {
    let auxArray = array;
    let aux, sum, a, b;
    let res = [];

    //remove the first element of the array in order to sum it with the rest of elements in the array.
    //if the sum is equal to the expected target sum, then the values will be stored into some variables
    while(array.length>0){
        aux = auxArray.shift();

        auxArray.forEach((element) => {
            sum = aux + element;
            if(sum == targetSum){
                a = aux;
                b = element;
                res = [a, b];
            }
        });
    }
    
    //console.log('a: ', a);
    //console.log('b: ', b);
    //console.log('sum: ', sum);
    return res;
    
}//End of twoNumberSum

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10); // [11, -1]
twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5); //[-5, 0]
twoNumberSum([15], 15); //[]