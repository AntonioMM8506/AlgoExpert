function nonConstructibleChange(coins) {
    coins.sort((a,b) => a-b);
    //console.log(coins);
    let sum = 0;
    let res;

    //if the element is bigger than the sum (0) + 1, immediately returns 1, for the cases of an array of
    //one element which is bigger than 1. 
    //otherwise it will compare in each iteration the sum of the array in ascending order, if the current element
    //is not bigger than the current sum it will continue with this loop until running out of elements, so the 
    //logic solution is the sum up of the whole array + 1. Otherwise, if a number is bigger than the sum of the
    //rest of the previous elements, then the answer is that sum + 1.
    coins.forEach((element) => {
        if(element > sum+1) return sum+1;
        sum += element;
    });

    res = sum+1;
    //console.log(res);
    return res;

}//End of nonConstructibleChange

nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]); // 20
nonConstructibleChange([109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4]); //87
nonConstructibleChange([2]);//1