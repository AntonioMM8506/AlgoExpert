function taskAssignment(k, tasks) {
    //Convert array into a map, as a pair of value and index
    let taskMap = tasks.map((value, index) => ({value, index}));
    taskMap.sort((a,b) => a.value - b.value);
    console.log(taskMap);

    //The most efficient time is calculated adding the lesser and the bigger times
    //once the map is sorted by this values, just need to push into the array the
    //couple of indexes corresponding to the values.
    let res = [];
    for(let i=0; i<tasks.length/2; i++){
        res.push([ taskMap[i].index, taskMap[tasks.length-i-1].index]);
    }
    console.log(res);

    return res;

}//End of taskAssignment


taskAssignment(3, [1, 3, 5, 3, 1, 4]); //[[0, 2], [4, 5], [1, 3]] => indexes
taskAssignment(4, [1, 2, 3, 4, 5, 6, 7, 8]); //[[0, 7], [1, 6], [2, 5], [3, 4]]
taskAssignment(5, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]); //[[0, 9], [1, 8], [2, 7], [3, 6], [4, 5]]
taskAssignment(10, [5, 6, 2, 3, 15, 15, 16, 19, 2, 10, 10, 3, 3, 32, 12, 1, 23, 32, 9, 2]); //[[15, 17], [2, 13], [8, 16], [19, 7], [3, 6], [11, 5], [12, 4], [0, 14], [1, 10], [18, 9]]
taskAssignment(2, [3, 4, 5, 3]); //[[0, 2],[3, 1]]
