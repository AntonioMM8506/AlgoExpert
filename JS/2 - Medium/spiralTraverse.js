function spiralTraverse(array) {
    let startRow = 0; //top x=0
    let endRow = array.length-1; //bottom x=array.length-1
    let startCol = 0; //left y=0
    let endCol = array[0].length-1; //right //y=array[x].lentgh-1
    const res = [];

    while(startRow<=endRow && startCol<=endCol){
        //All the elements from left to right from the first row
        for(let i=startCol; i<=endCol; i++){
            res.push(array[startRow][i]);
        }
        startRow++;//The first row will be the next one below
        

        //All the last elements from every pending row, up to down
        for(let j=startRow; j<=endRow; j++){
            res.push(array[j][endCol]);
        }
        endCol--;
        //The last element to the right will be the previous one to the left
        
        //all the left elements from right to left from the last row
        for(let k=endCol; k>=startCol; k--){
            if(startRow-1===endRow) break;
            res.push(array[endRow][k]);
        }
        endRow--;//The last row will be the previous one

        
        //all the first elements from every pending row, down to up
        for(let l=endRow; l>=startRow; l--){
            if(startCol===endCol+1) break;
            res.push(array[l][startCol]);
        }
        startCol++;//The left element to the left will be the next one to the right

        //repeat
    }
    

    console.log(res);
    return res;
}//End of spiralTraverse


/*

->->->->
^ ->    |
|       v
^       |
|       v
<-<-<-<-

*/

//Test Cases
spiralTraverse([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]]); //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16


spiralTraverse([1]);//1

spiralTraverse([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
]);//1, 2, 3, 4, 5, 6, 7, 8, 9


spiralTraverse([
    [4, 2, 3, 6, 7, 8, 1, 9, 5, 10],
    [12, 19, 15, 16, 20, 18, 13, 17, 11, 14]
]);//4, 2, 3, 6, 7, 8, 1, 9, 5, 10, 14, 11, 17, 13, 18, 20, 16, 15, 19, 12

spiralTraverse([
    [1],
    [3],
    [2],
    [5],
    [4],
    [7],
    [6]
]); //1, 3, 2, 5, 4, 7, 6


spiralTraverse([
    [1, 2, 3, 4],
    [10, 11, 12, 5],
    [9, 8, 7, 6]
]);//1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
