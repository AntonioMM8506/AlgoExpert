function mergeOverlappingIntervals(array) {
    //If there is only on element in the given array, just returns the given array.
    if(array.length < 2) {
        console.log(array);
        return array;
    }
    
    let res = [];
    //Sort the array, and then just take the first element to make the comparisons.
    array.sort((a, b) => a[0] - b[0]);
    let prev = array[0];    

    for(let i = 1; i<array.length; i++){
        //If the first number of the sencond element is smaller than the sencond number of the previous
        //element, then the previous element is modified, so it will take only the first number of the 
        //previous element and the max number between the second number of the previous element and the 
        //second number of the second element. 
        //Otherwise it will push the current previous element and the previous number will now be equal
        //to the current element. 
        if(prev[1]>= array[i][0]){
            prev = [prev[0], Math.max(prev[1], array[i][1])];
        } else{
            res.push(prev);
            prev = array[i];
        }
    }

    //With this logic, there will be one last pendng element to include, so it will need to be included at
    //the end of the iteration.
    res.push(prev);

    console.log(res);
    return res;

}//End of mergeOverlapingIntervals

mergeOverlappingIntervals([[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]); //[[1,2], [3,8], [9,10]]
mergeOverlappingIntervals([[1, 10], [10, 20], [20, 30], [30, 40], [40, 50], [50, 60], [60, 70], [70, 80], [80, 90], [90, 100]]);//[[1,100]]
mergeOverlappingIntervals([[100, 105], [1, 104]]);//[[1, 105]];
mergeOverlappingIntervals([[89, 90], [-10, 20], [-50, 0], [70, 90], [90, 91], [90, 95]]);//[[-50, 20], [70, 95]]
mergeOverlappingIntervals([[20, 21], [22, 23], [0, 1], [3, 4], [23, 24], [25, 27], [5, 6], [7, 19]]);//[[20, 21], [22, 23], [0, 1], [3, 4], [23, 24], [25, 27], [5, 6], [7, 19]]

