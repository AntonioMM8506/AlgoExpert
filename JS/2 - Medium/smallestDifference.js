function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a,b) => a-b);
    arrayTwo.sort((a,b) => a-b);
    let res = [];
    let sum = 0;
    let current = Infinity;//simulate the nuber infinity as the highest computational possible number
    
    //compares the absolute difference between the two numbers, if the difference is lower than the current
    //value, then the current value now will be equals to the actual difference. 
    for(let i=0; i<arrayOne.length; i++){
        for(let j=0; j<arrayTwo.length; j++){
            sum = Math.abs(arrayOne[i]-arrayTwo[j]);
            if(sum<current){
                current = sum;
                res = [arrayOne[i], arrayTwo[j]] 
            }
        }
    }

    console.log(res);
    return res;

}//End of smallestDifference

smallestDifference([-1, 5, 10, 20, 28, 3],  [26, 134, 135, 15, 17]); //[28, 26]
smallestDifference([240, 124, 86, 111, 2, 84, 954, 27, 89], [1, 3, 954, 19, 8]); //[954, 954]
smallestDifference( [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530],  [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]); //[530, 530]
