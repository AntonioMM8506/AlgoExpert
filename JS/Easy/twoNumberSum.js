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

  // Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
