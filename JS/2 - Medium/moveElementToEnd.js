function moveElementToEnd(array, toMove) {
    //let auxArray = [...array];
    let res = [];
    
    for(let i=0; i<array.length; i++){
        (array[i]==toMove)? res.push(array[i]):res.unshift(array[i]);
    }

    console.log(res);
    return res;

}//End of moveElementToEnd

moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2);
moveElementToEnd([], 3);
moveElementToEnd([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5], 5);