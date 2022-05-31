function minimumWaitingTime(queries) {
    let res = 0;
    array = [...queries];//duplicates the array in order to modify this copy and not the original one.
    array.sort((a,b) => a-b);//sorts the array from min to max value.
    let aux = [];//auxiliary array

    //In case there is more than one element, the iteration does not take in consideration the last
    //element. In each iteration, in the aux array, the total sum of all the elements, up to the current
    //iteration are sumed all together. At the end, all this values are one sumed once again to obtain
    //the "minimum Waiting time" fot the query
    //[3, 2, 1, 2, 6] => [1, 2, 2, 3, 6]
    //0+1 = 1;
    //1+2 = 3;
    //3+2 = 5
    //5+3 = 8
    //1+3+5+8 = 17
    if(array.length>1){
        for(let i=0; i<array.length-1; i++){
            aux.push(array.slice(0, i+1).reduce((a,b)=>a+b));
        }
        res = aux.reduce((a,b) => a+b);
    }

    console.log(aux);
    console.log(res);
    return res;

}//End of minimunWaitingTime


minimumWaitingTime([3, 2, 1, 2, 6]); // 17
minimumWaitingTime([6]); //0
minimumWaitingTime([4, 3, 1, 1, 3, 2, 1, 8]);//45
minimumWaitingTime([8, 9]); //8
minimumWaitingTime([1, 1, 1, 4, 5, 6, 8, 1, 1, 2, 1]);//81
