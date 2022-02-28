function maxSubsetSumNoAdjacent(array) {
    let inc = array[0]; //inclusive
    let exc = 0; //exclusive
    let temp = 0;
    let res = 0;
    
    //if the empty is array, returns 0
    if(!array.length){ res = 0; }
    //if there's only one element in the array, returns that element only 
    else if(array.length == 1){ res = array[0]; }
    //The first element is an inclusive element, so it is included in the result. The first exclusive
    //element is 0, because it is not included in the elements for the expected sum. We store the value
    //of the inclusive value in a temporal variable so the exclusive element wil acquire its value later
    //The inclusive element will acquire its value with the comparison between the sum of the exclusive
    //and the element of the array for the current iteration and the inclusive value. 
    else{
        for(let i=1; i<array.length; i++){
            temp = inc;
            inc = Math.max(exc + array[i], inc);
            exc = temp;
        }
        res = inc;
    }
    
    console.log(res);
    return res;

}//End of maxSubsetSumNoAdjacent

maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]); //330
maxSubsetSumNoAdjacent([]);//0
maxSubsetSumNoAdjacent([1]);//1
maxSubsetSumNoAdjacent([1, 2]);
maxSubsetSumNoAdjacent([10, 5, 20, 25, 15, 5, 5, 15]);//60
