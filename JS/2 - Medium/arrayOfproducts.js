function arrayOfProducts(array) {
    let res = [];
    
    for(let i=0; i<array.length; i++){
        let mult = 1;//Restarts the multiplication in every iteration
        for(let j =0; j<array.length; j++){
            //If the indexes are not equal, then the multiplication is performed, otherwise it will
            //do nothing, in order to avoid any operation at that index.
            if(i!=j){
                mult *= array[j];
            }
        }
        res.push(mult);
    }

    console.log(res);
    return res;

}//End of arratOfProducts


arrayOfProducts([5, 1, 4, 2]); //[8, 40, 10, 20]
arrayOfProducts([0, 0, 0, 0]); //[0, 0, 0, 0]
arrayOfProducts([-1, -1, -1, -1]); //[-1, -1, -1, -1]
arrayOfProducts([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); //[362880, 0, 0, 0, 0, 0, 0, 0, 0, 0]
arrayOfProducts([-5, 2, -4, 14, -6]);//[672, -1680, 840, -240, 560]
