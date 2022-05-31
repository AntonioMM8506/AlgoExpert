function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    let res = 0;
    let pair = [];

    if(fastest){
        redShirtSpeeds.sort((a,b) => a-b);
        blueShirtSpeeds.sort((a,b) => b-a);
    }else{
        redShirtSpeeds.sort((a,b) => a-b);
        blueShirtSpeeds.sort((a,b) => a-b);
    }
    

    for(let i = 0; i<redShirtSpeeds.length; i++){
        pair.push([redShirtSpeeds[i], blueShirtSpeeds[i]]);
        console.log(pair);

        res += Math.max(pair[i][0], pair[i][1]);
    }

    console.log(res + '\n');
    return res;
}//End of tandemBicycle

tandemBicycle( [5, 5, 3, 9, 2],  [3, 6, 7, 2, 1], true); //32
tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false); //25
tandemBicycle([1, 2, 1, 9, 12, 3, 1, 54, 21, 231, 32, 1], [3, 3, 4, 6, 1, 2, 5, 6, 34, 256, 123, 32], true); //816
tandemBicycle([1], [5], true); //5
tandemBicycle([1, 1, 1, 1, 2, 2, 2, 2, 9, 11], [1, 1, 1, 1, 3, 3, 3, 3, 5, 7], false); //36
