function numberOfWaysToMakeChange(n, denoms) {
    //Creates an array of length n+1, for example, if the amount is 10, then the array
    //is like this [1,0,0,0,0,0,0,0,0,0,0]. The first position is always a number 1, this
    //indicates that in the given case we are asked to give 0 change, there is only 1 way
    //to do so, and it is not giving anything at all. 
    let ways = [1].concat(Array(n).fill(0));
    
    //Then we will iterate over the array making this comparison. If the actual denomination is greater
    //or equal than the previous position, then that current position will be the rest of the current value
    //position minus the value of the previous position. For example, in the given case that we are looking
    //for a value n of 10, then the first iteration will compare denoms[0] (1) <= 1, then, because it is
    //correct, then in the ways array we will add the value of ways[1] = ways[1] + ways[1-1] = 0 + 1, so 
    //ways[1] = 1, and so will be the consecutive order, so at the end of the first cycle we will have an
    //array like this [1,1,1,1,1,1,1,1,1,1,1], in the second iteration we compare the next currency and so 
    //on, at the end, the last element of the ways array will indicate how many possible ways exist of give
    //the given amount. 
    for(let i=0; i<denoms.length; i++){
        for(let j=1; j<n+1; j++){
            if(denoms[i]<= j){
                ways[j] += ways[j-denoms[i]];
                
            }
        }
    }

    console.log(ways[n]);
    return ways[n];

}//End of numberOfWaysToMakeChange

numberOfWaysToMakeChange(6, [1, 5]); //2 => 1x1+1x5; 6x1
numberOfWaysToMakeChange(0, [2, 3, 4, 7]); //0
numberOfWaysToMakeChange(9, [5]); //0
numberOfWaysToMakeChange(10, [1, 5, 10, 25]); //1 => 1x4
numberOfWaysToMakeChange(7, [2, 3, 4, 7]);//3 => 2x2+1x3; 1x3+1x4; 1x7
