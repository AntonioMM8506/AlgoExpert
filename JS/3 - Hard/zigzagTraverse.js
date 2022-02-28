function zigzagTraverse(array) {
    if(array.length == 0 || array[0].length == 0){ return []; }
    let row = array.length;
    let col = array[0].length;
    let index = 0;
    let resLength = row*col;
    let x = 0;
    let y = 0;
    let sum = 0;
    let isEven = false;
    let res = [];

    while(index < resLength) {
        //Adds the element to the Array List according to the values of x and y, as in a proper matrix
        res.push(array[x][y]);
        index++;
        //As mentioned before, in each iteration it has to validate the direction
        sum = y+x;
        isEven = (sum%2==0) ? true:false;
        
        if(isEven) {
            if(y==0 || x==row-1) {
                //If the value of x is equal to the max number of rows-1 then only the y coordinate increments,
                //otherwise the x will increment, so it can "move" a level below. 
                if(x==row-1) {
                    y++;
                }else {
                    x++;
                }
            //If the pointer is not located in the top levels, then it will move one level down and one level
            //to the left
            }else {
                x++;
                y--;
            }
        }else { //if Odd
            if(x==0 || y==col-1) {
                //If the value of y is equal to the max number of columns-1 then only the x coordinate increments,
                //otherwise the y will increment, so if can "move" a level to the right
                if(y==col-1) {
                    x++;
                }else {
                    y++;
                }
            //If the pointer is not located in the top levels, then it will move one level to the right and one
            //level below.
            }else {
                y++;
                x--;
            }
        }
        
    }//End of while
    
    
    console.log(res);
    return res;

}//End of zigzagTraverse

zigzagTraverse([
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16],
]);//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
zigzagTraverse([
    [1, 2, 3, 4, 5]
]);//[1,2,3,4,5]
zigzagTraverse([
    [1, 3, 4, 10, 11],
    [2, 5, 9, 12, 20],
    [6, 8, 13, 19, 21],
    [7, 14, 18, 22, 27],
    [15, 17, 23, 26, 28],
    [16, 24, 25, 29, 30]
]);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
