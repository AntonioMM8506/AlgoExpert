function binarySearch(array, target) {
    //2 neccessary limits for searching, top max and top min
    let leftP = 0;
    let rightP = array.length-1;
    let mid;

    while(rightP>= leftP){
        mid = leftP + Math.floor((rightP-leftP)/2);

        //Looking for the medium element of the array, if it is a match, then return that index
        if(array[mid]==target){
            return mid;
        }

        //If the mid element is greater than the derised value, then we need to look at the left
        //so, now the top limit of the array will be the half of the array
        if(array[mid]>target){
            rightP = mid-1;
        }else{
            //Now, if the mid element is lower than the desired value, then our new top min will be at
            //the half of the array
            leftP = mid+1;
        }
    }

    return -1;
}//End of binarySearch

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)); //3
console.log(binarySearch([1, 5, 23, 111], 111)); //3
console.log(binarySearch([1, 5, 23, 111], 35)); //-1
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 0)); //0
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 355)); //9
