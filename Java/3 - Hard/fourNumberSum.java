import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

class Program {
    public static List<Integer[]> fourNumberSum(int[] array, int targetSum) {
        int i, j, k, l;
        int sum = 0;
        ArrayList<Integer[]> res = new ArrayList<Integer[]>();

        for(i=0; i<array.length; i++){
            for(j=i+1; j<array.length; j++){
                for(k=j+1; k<array.length; k++){
                    for(l=k+1; l<array.length; l++){
                        sum = array[i] + array[j] + array[k] + array[l];
                        if(sum == targetSum){
							Integer[] auxArray = {array[i], array[j], array[k], array[l]};
							res.add(auxArray);
						}							
                    }//4th
                }//3rd
            }//2nd
        }//1st

        System.out.println("New Case");
        for(int n=0; n<res.size(); n++){
            System.out.println(Arrays.toString(res.get(n)));
        }
        return res;
    }//End of fourNumberSum

    public static void main(String[] args){
        fourNumberSum(new int[]{7, 6, 4, -1, 1, 2}, 16);
        fourNumberSum(new int[]{-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9}, 4);
        fourNumberSum(new int[]{-10, -3, -5, 2, 15, -7, 28, -6, 12, 8, 11, 5}, 20);
    }//End of Main

}//End of class
