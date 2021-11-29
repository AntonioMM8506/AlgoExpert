function tournamentWinner(competitions, results) {
    let comp = new Map();

    //if results[i] == 0, then team of index 1 wins
    //if results[i] == 1, then team of index 0 wins
    //if there's no previous key with the given team name, it creates it with 3 points, 
    //otherwise it will increase its value by 3
    for(let i=0; i<competitions.length; i++){
        if(results[i] == 0){
            if(comp.has(competitions[i][1])){
                comp.set(competitions[i][1], comp.get(competitions[i][1])+3);
            }
            else{
                comp.set(competitions[i][1], 3);
            }
        }
        else if(results[i]==1){
            if(comp.has(competitions[i][0])){
                comp.set(competitions[i][0], comp.get(competitions[i][0])+3);
            }
            else{
                comp.set(competitions[i][0], 3);
            }
        }
        console.log(comp);//to display how is the tournament going.
    }

    //Determines wich key has the highest value.
    let max = 0;
    let min = 0;
    let res;
    comp.forEach((value, key) => {
        if(value > max ){
            max = value;
            res = key; 
        }else if(value < max){
            min = value;
        }
    });
    
    console.log(res);
    return res;

}//end of tournamentWinner

tournamentWinner([["HTML", "C#"],["C#", "Python"],["Python", "HTML"]], [0, 0, 1]); //Python
tournamentWinner([["A", "B"]], [0]); //B
tournamentWinner([["HTML", "Java"], ["Java", "Python"], ["Python", "HTML"]], [0, 1, 1]); //Java
