function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a-b);
    let res = [];
    let sum = 0;

    //Brute force approach, run over the whole array, in each iteration sums all the possible variations
    //is the sum of the current iteration corresponds to the targetSum it will push the 3 numbers as an
    //array, so it will return an array of arrays;
    for(let i=0; i<array.length; i++){
        for(let j = i+1; j<array.length; j++){
            for(let k = j+1; k<array.length; k++){
                sum = array[i] + array[j] + array[k];            
                if(sum == targetSum) res.push([array[i], array[j], array[k]])
            }
        }
    }

    //console.log(res);
    return res;

}//End of threeNumberSum


threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
threeNumberSum([8, 10, -2, 49, 14], 57);
threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], 0);