function insertionSort(array) {
    let temp;

    //It compares the previous value with the current one. If the current value is lower than
    //the previous one, then it switch places.
    for(let i=1; i<array.length; i++){
        for(let j=i; j>0; j--){
            if(array[j]<array[j-1]){
                temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
        }
    }

    console.log(array);
    return array;

}//End of insertionSort

insertionSort([8, 5, 2, 9, 5, 6, 3]); //[2, 3, 5, 5, 6, 8, 9]
insertionSort([1]); //[1]
insertionSort([1, 3, 2]); //[1, 2, 3]
insertionSort([-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8]); 
//[-10, -7, -7, -6, -6, -5, -5, -4, -4, -4, -2, -1, 1, 3, 5, 5, 6, 8, 8, 10]
insertionSort([427, 787, 222, 996, -359, -614, 246, 230, 107, -706, 568, 9, -246, 12, -764, -212, -484, 603, 934, -848, -646, -991, 661, -32, -348, -474, -439, -56, 507, 736, 635, -171, -215, 564, -710, 710, 565, 892, 970, -755, 55, 821, -3, -153, 240, -160, -610, -583, -27, 131]);
//[-991, -848, -764, -755, -710, -706, -646, -614, -610, -583, -484, -474, -439, -359, -348, -246, -215, -212, -171, -160, -153, -56, -32, -27, -3, 9, 12, 55, 107, 131, 222, 230, 240, 246, 427, 507, 564, 565, 568, 603, 635, 661, 710, 736, 787, 821, 892, 934, 970, 996]
