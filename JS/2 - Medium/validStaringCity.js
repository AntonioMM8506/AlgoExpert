function validStartingCity(distances, fuel, mpg) {
    let res = 0;
    let currentDist = 0;
    let distancePending = 0;

    for(i=1; i<distances.length; i++){
        currentDist += (fuel[i-1]*mpg) - distances[i-1];
        if(currentDist < distancePending){
            distancePending = currentDist;
            res = i;
        }
    }

    console.log(res);
    return res;
}//End of validStartingCity


var tc1 = { "distances": [5, 25, 15, 10, 15], "fuel": [1, 2, 1, 0, 3], "mpg": 10 } //4
var tc2 = { "distances": [10, 20, 10, 15, 5, 15, 25], "fuel": [0, 2, 1, 0, 0, 1, 1], "mpg": 20 } //1
var tc3 = { "distances": [1, 3, 10, 6, 7, 7, 2, 4], "fuel": [1, 1, 1, 1, 1, 1, 1, 1], "mpg": 5 } //6
var tc4 = { "distances": [5, 2, 3], "fuel": [1, 0, 1], "mpg": 5 } //2
var tc5 = { "distances": [15, 20, 25, 30, 35, 5], "fuel": [0, 3, 0, 0, 1, 1], "mpg": 26 } //5

validStartingCity(tc1.distances, tc1.fuel, tc1.mpg); //4
validStartingCity(tc2.distances, tc2.fuel, tc2.mpg); //1
validStartingCity(tc3.distances, tc3.fuel, tc3.mpg); //6
validStartingCity(tc4.distances, tc4.fuel, tc4.mpg); //2
validStartingCity(tc5.distances, tc5.fuel, tc5.mpg); //5
