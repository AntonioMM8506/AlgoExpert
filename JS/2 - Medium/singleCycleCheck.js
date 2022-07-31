function hasSingleCycle(array) {
    let res;
    //let objArray = Object.assign({}, array); //=> Converts an array into an object with index and values
    
    //converts the array into an array of objetcs, in order to store a value according
    //to the index, in case the element is "visited" in an iteration.
    objArray = array.map((e) => ({
        value: e,
        visited: 0
    }));

    let count = 0;
    let index = 0;

    //iterate over the array of objects and store the value of the current index 
    //according to the value, in case the value is higher to the array length, then the index
    //starts over again from the left; in case the value is lesser than 0, then the index starts
    //from the ending of the array. When an element is "visited", then its visited property
    //increases by 1, indicating that it has been visited once. 
    while(count<array.length){
        index += objArray[index].value;
        while(index<0 || index>=array.length){

            if(index<0){
                index = array.length + index;
            } else if(index>=array.length){
                index = index - array.length;
            }
        }
        //console.log(index);

        objArray[index].visited += 1;
        //console.log(objArray);

        count ++;
    }

    //For a case of true, all the elements of the array must be visited once and only
    //once, any other case will result in a false result.
    let aux = 0;
    for(let j=0; j<objArray.length; j++){
        if(objArray[j].visited == 1){
            aux++;
        }
    }

    res = (aux==array.length) ? true:false;

    console.log(res);
    return res;

}//End of hasSingleCycle


hasSingleCycle([2, 3, 1, -4, -4, 2]); //true
hasSingleCycle([2, 2, -1]);//true
hasSingleCycle([1, 1, 1, 1, 1]);//true
hasSingleCycle([0, 1, 1, 1, 1]);//false
hasSingleCycle([1, 1, 1, 1, 2]);//false
hasSingleCycle([3, 5, 6, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2]);//true
hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -26]);//true
hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 908, -26]);//true
