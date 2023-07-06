function digitalRoot(n) {
    let aux = 0;
    let res = false;
    let sum = 0;

    while(aux <= n){
        sum = aux*(aux+1);
        aux++;
        if(sum == n){
            res = true
        }else{
            sum = 0;
            
        }
    }
    return res

}


console.log(digitalRoot(0));
console.log(digitalRoot(1));
console.log(digitalRoot(2));
console.log(digitalRoot(3));