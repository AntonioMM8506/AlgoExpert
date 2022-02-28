function getNthFib(n) {
    if(n==1){
        return 0;
    }else if(n==2){
        return 1;
    }else{
        return getNthFib(n-1) + getNthFib(n-2);
    }

}//end of getNthFib

//1, 2, 3, 4, 5, 6, 7, 8 .....
//0, 1, 1, 2, 3, 5, 8, 13 ....

//Test Cases
console.log(getNthFib(6));//5
console.log(getNthFib(1));//0
console.log(getNthFib(7));//8
console.log(getNthFib(11));//55
console.log(getNthFib(18));//1597
