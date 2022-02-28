public class NthFibonacci{
    public static int getNthFib(int n){
        if(n==1){
            return 0;
        }else if(n==2){
            return 1;
        }else{
            return getNthFib(n-1) + getNthFib(n-2);
        }
    }//End of getNthFib

    public static void main(String[] args){
        getNthFib(6);//5
        getNthFib(7);//8
        getNthFib(1);//0
        getNthFib(11);//55
        getNthFib(18);//1597
    }//End of Main

}//End of class
