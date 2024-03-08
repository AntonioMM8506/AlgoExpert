function missingNumbers(nums) {
    let res = [];
    
    //First, calculate the expected sum, if we have an array of 3 elements, then we are waiting for an
    //array of 5 elements at the end.
    let targetSum = 0;
    for(let i=1; i<=nums.length+2; i++){
        targetSum+=i;
    }

    //Calculate the sum of the actual elements of the initial array
    let currentSum = nums.reduce((sum, current) => sum + current, 0);
    //Calculate the difference between the current array and the expected array
    let difference = targetSum - currentSum;
    //The average of this difference will be our starting point.
    let minNum = Math.floor(difference/2);
    //console.log(targetSum);
    //console.log(currentSum);

    //With the low part of the given average each iteartion we are gonna validate
    //if the given number exists, if not, we decrease the number by 1. in the case
    //we find the low missing number, we push that element in the output array and
    //into the given initial array.
    while(minNum>0){
        if(!nums.includes(minNum)){
            res.push(minNum);
            nums.push(minNum);
            minNum = 0;
        }
        else{
            minNum--;
        }
    }

    //repeat the process, recalculate the sum of all of the elements in the given array
    //plus the element we found in the previous step
    currentSum = nums.reduce((sum, current) => sum + current, 0);
    //And then. the difference of the target sum and the new current Sum is our second
    //missing number
    res.push(targetSum - currentSum);

    console.log(res);
    return res;

}//End of missingNumbers



missingNumbers([]);//[1,2]
missingNumbers([1]);//[2,3]
missingNumbers([2]);//[1,3]
missingNumbers([1,2,3]);//[4,5]
missingNumbers([3,2,1]);//[4,5]
missingNumbers([3,4,5]);//[1,2]
missingNumbers([1,4,3]);//[2,5]
missingNumbers([7, 6, 5, 4, 3, 2, 1]);//[8,9]
missingNumbers([11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);//[23,24]
