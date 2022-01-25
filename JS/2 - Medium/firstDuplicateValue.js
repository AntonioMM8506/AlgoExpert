function firstDuplicateValue(array) {
    let res = -1;
    let distant = array.length;

    //Compares the first element with the next one, if both are equal, then stores the index, j, and
    //its value, however, if we find another coincidence with a lesser value, then this is our new
    //closer duplicated value.
    for(let i=0; i<array.length-1; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i]==array[j]){
                if(j<distant){
                    distant = j;
                    res = array[i];
                }
            }
        }
    }

    console.log(res);
    return res;

}//End of firstDuplicateValue


firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]); //2
firstDuplicateValue([3, 1, 3, 1, 1, 4, 4]); //3
firstDuplicateValue([2, 1, 5, 3, 3, 2, 4]); //3
firstDuplicateValue([1]); //-1
firstDuplicateValue([]); //-1
