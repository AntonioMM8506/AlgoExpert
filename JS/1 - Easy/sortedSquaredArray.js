function sortedSquaredArray(array) {
    let res = [];

    //for each element in the array, it will stores its corresponding powered number in a new array
    //then this new array will be sorted in ascending order.
    array.forEach(element => res.push(element**2));
    res.sort((a,b) => a-b);
    
    console.log(res);
    return res;

}//End of sortedSquearedArray

sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]); //[1, 4, 9, 25, 36, 64, 81]
sortedSquaredArray([-3, -2, -1]); //[1, 4, 9]
sortedSquaredArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);//[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]