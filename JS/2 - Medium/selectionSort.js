function selectionSort(array) {
    let aux;

    //declare the min value index as the first element. Then it will compare against the following
    //elements, in case the next element is smaller than the current one, that index is the new min value
    //so a swap is required. Both elements swap according to their indexes.
    for(let i = 0; i<array.length-1; i++){
        let minIndex = i;
        for(let j = i+1; j<array.length; j++){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }

        [array[i], array[minIndex]] = [array[minIndex], array[i]];

        //aux = array[i];
        //array[i] = array[minIndex];
        //array[minIndex] = aux;
    }

    console.log(array);
    return array;

}//End of selectionSort

selectionSort([8, 5, 2, 9, 5, 6, 3]); //[2, 3, 5, 5, 6, 8, 9]
selectionSort([1]); //[1]
selectionSort([8, -6, 7, 10, 8, -1, 6, 2, 4, -5, 1, 10, 8, -10, -9, -10, 8, 9, -2, 7, -2, 4]); //[-10, -10, -9, -6, -5, -2, -2, -1, 1, 2, 4, 4, 6, 7, 7, 8, 8, 8, 8, 9, 10, 10]
selectionSort([5, -2, 2, -8, 3, -10, -6, -1, 2, -2, 9, 1, 1]); //[-10, -8, -6, -2, -2, -1, 1, 1, 2, 2, 3, 5, 9]
selectionSort([-823, 164, 48, -987, 323, 399, -293, 183, -908, -376, 14, 980, 965, 842, 422, 829, 59, 724, -415, -733, 356, -855, -155, 52, 328, -544, -371, -160, -942, -51, 700, -363, -353, -359, 238, 892, -730, -575, 892, 490, 490, 995, 572, 888, -935, 919, -191, 646, -120, 125, -817, 341, -575, 372, -874, 243, 610, -36, -685, -337, -13, 295, 800, -950, -949, -257, 631, -542, 201, -796, 157, 950, 540, -846, -265, 746, 355, -578, -441, -254, -941, -738, -469, -167, -420, -126, -410, 59]); // [-987, -950, -949, -942, -941, -935, -908, -874, -855, -846, -823, -817, -796, -738, -733, -730, -685, -578, -575, -575, -544, -542, -469, -441, -420, -415, -410, -376, -371, -363, -359, -353, -337, -293, -265, -257, -254, -191, -167, -160, -155, -126, -120, -51, -36, -13, 14, 48, 52, 59, 59, 125, 157, 164, 183, 201, 238, 243, 295, 323, 328, 341, 355, 356, 372, 399, 422, 490, 490, 540, 572, 610, 631, 646, 700, 724, 746, 800, 829, 842, 888, 892, 892, 919, 950, 965, 980, 995]

