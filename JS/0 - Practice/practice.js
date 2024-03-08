function coinChange(coins, amount) {
    coins.sort((a, b) => b - a); //Sort array in descending order

    //auxArray => initial value or the previously returned value
    //coin => the value of the current element of the iteration
    const result = coins.reduce((auxArray, coin) => { //Not suitable for empty arrays!
        let count = Math.floor(amount/coin); //Round number, number of times a certain coin fits
        auxArray = auxArray.concat(Array(count).fill(coin)); //Add the number of times the coin fits into the auxiliar array
        amount %= coin; //calculate the remaining amount
        
        return auxArray;
    }, []); //Returns an empty array by default

    // Return the result array
    console.log(result);
    return result;
}

coinChange([5, 2, 10, 1], 17); //[10, 5, 2]
coinChange([8, 1, 9, 4], 13); //[9, 4]
coinChange([10, 1, 5, 2], 0);//[] => no match, returns an empty array
coinChange([1, 3, 4, 5, 6], 2);//[1,1]
coinChange([1, 6, 7, 10, 11], 35);//[11, 11, 11, 1, 1]
