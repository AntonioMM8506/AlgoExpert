function classPhotos(redShirtHeights, blueShirtHeights) {
    let res = true;
    //Sort the arrays, we are talking about heights, so we can sort them in ascending order.
    redShirtHeights.sort((a,b) => a-b);
    blueShirtHeights.sort((a,b) => a-b);

    //compares the max value of each array, in order to determine which team is going to be
    //the back row. Then, if one team is chosen as the back Row, the other one has to be the
    //front row, so a comparison of arrays is executed. 
    //even if the two arrays contain the same elements in the same order. This is due to the fact 
    //that arrays and objects are compared by reference and not by value in JavaScript, which means 
    //this solution does not produce the desired result, so we use JSON.stringify to concatenate all the
    //elements in the array and compare two strings. 
    backRow = (Math.max(...redShirtHeights) > Math.max(...blueShirtHeights)) ? [...redShirtHeights]:[...blueShirtHeights];
    frontRow = (JSON.stringify(backRow) == JSON.stringify(redShirtHeights)) ? [...blueShirtHeights] : [...redShirtHeights];
    
    console.log(frontRow);
    console.log(backRow);

    //If only one member of the front row is taller or has the same height than the parallel member
    //of the back row, then the photo shoot is not possible. 
    for(let i = 0; i<backRow.length; i++){
        if(frontRow[i]>=backRow[i]){
            res = false;
        }
    }

    console.log(res);
    return res;
    
}//End of classPhotos


classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]);//true
classPhotos([6, 9, 2, 4, 5], [5, 8, 1, 3, 4]);//true
classPhotos([1, 1, 1, 1, 1, 1, 1, 1], [5, 6, 7, 2, 3, 1, 2, 3]);//false
classPhotos([125], [126]); //true
classPhotos([19, 2, 4, 6, 2, 3, 1, 1, 4], [21, 5, 4, 4, 4, 4, 4, 4, 4]);//false
