function isValidSubsequence(array, sequence) {
    //console.log(sequence);
    let res = false;
    let seq = 0;

    //if there's is a match, the pointer for the index in the sequence array will move, with this
    //it will look the subarray in the expected order. Then it compares the number of ocurrences for the match
    //if the number of coincidences is equal to the number of elements in the sequence array, then we got
    //a subarray.
    for(let i=0; i<array.length; i++){
        if(sequence[seq] == array[i]) seq++;
    }

    res = (seq===sequence.length) ? true : false;
    console.log(res);
    return res;
    
}//End of isValidSubsequence

isValidSubsequence([1, 1, 1, 1, 1],  [1, 1, 1]); //true
isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],  [5, 1, 22, 10]); // true
isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 6, -1, 8, 10]); //false

