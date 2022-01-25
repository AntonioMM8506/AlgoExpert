class Program {
    public static boolean isMonotonic(int[] array) {
        boolean nonDecreasing = true;
        boolean nonIncreasing = true;

        for(int i=0; i<array.length-1; i++){
            if(array[i]<array[i+1]){
                nonIncreasing = false;
            }
            if(array[i]>array[i+1]){
                nonDecreasing = false;
            }
        }

        boolean res = nonDecreasing || nonIncreasing;
        System.out.println(res);
        return res;

    }//End of monotonicArray

    public static void main(String[] args){
        isMonotonic(new int[] {-1, -5, -10, -1100, -1100, -1101, -1102, -9001});//true
        isMonotonic(new int[] {});//true
        isMonotonic(new int[] {1});//true
        isMonotonic(new int[] {1, 2});//true
        isMonotonic(new int[] {-1, -5, -10, -1100, -900, -1101, -1102, -9001});//false
    }//End of main

}//End of class Program 
