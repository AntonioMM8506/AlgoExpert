function isValidSubsequence(array, sequence) {
    //sequence = [...new Set(sequence)];
    //console.log(sequence);
    let res = false;
    let arr = 0;
    let seq = 0;
    let i;

    for(i=0; i<array.length; i++){
        if(sequence[seq] == array[i]) seq++;
    }

    res = (seq===sequence.length) ? true : false;
    console.log(res);
    return res;
}//End of isValidSubsequence

isValidSubsequence([1, 1, 1, 1, 1],  [1, 1, 1]); //true
isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],  [5, 1, 22, 10]); // true
isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 6, -1, 8, 10]); //false

