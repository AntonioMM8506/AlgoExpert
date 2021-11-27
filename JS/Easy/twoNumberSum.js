function twoNumberSum(array, targetSum) {
    let auxArray = array;
    let aux, sum, a, b;
    let res = [];

    while(array.length>0){
        aux = auxArray.shift();

        auxArray.forEach((element) => {
            sum = aux + element;
            if(sum == targetSum){
                a = aux;
                b = element;
                //console.log('a: ', a);
                //console.log('b: ', b);
                //console.log('sum: ', sum);
                res = [a, b];
            }
        });
    }
    
    return res;
}//End of twoNumberSum

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10); // [11, -1]
twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5); //[-5, 0]
twoNumberSum([15], 15); //[]