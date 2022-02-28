function fourNumberSum(array, targetSum) {
    let i, j, k, l;
    let res = [];
    let sum = 0;
    
    //Brute force approach, try all the possible sums with the four possible numbers, without repeating
    //and if there is a coincidence, it will push it into res array.
    for(i=0; i<array.length; i++){
        for(j=i+1; j<array.length; j++){
            for(k=j+1; k<array.length; k++){
                for(l=k+1; l<array.length; l++){
                    sum = array[i] + array[j] + array[k] + array[l];
                    if(sum == targetSum) res.push([array[i], array[j], array[k], array[l]]);
                }
            }
        }
    }

    return res;
}//End of fourNumberSum

fourNumberSum([7, 6, 4, -1, 1, 2], 16);
fourNumberSum([-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
fourNumberSum([-10, -3, -5, 2, 15, -7, 28, -6, 12, 8, 11, 5], 20);
