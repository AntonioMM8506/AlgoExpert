import java.util.*;

public class ZigZagTraverse {
    
    public static List<Integer> zigzagTraverse(List<List<Integer>> array) {
    	//If the List of List is empty, returns an empty ArrayList
    	if(array.size() == 0 || array.get(0).size()==0) { return new ArrayList<Integer>(); }
    	int row = array.size(); //number of x elements
    	int col = array.get(0).size();//number of y elements
    	//Because all the elements will be used, so a way to determine the number of iterations is by 
    	//multiplying the number of rows per columns
    	int index = 0;
    	int resLength = row*col;
    	//When moving the direction of the Matrix, we can use the values of the sum of the x and y coordinates
    	//if the result is an even number, so it means that the directions is going up way, otherwise down way.
    	int x = 0;
    	int y = 0;
    	int sum = 0;
    	boolean isEven = false;
    	//To store the elements for the final result
    	ArrayList<Integer> res = new ArrayList<Integer>();

    	
    	while(index < resLength) {
    		//Adds the element to the Array List according to the values of x and y, as in a proper matrix
    		res.add(array.get(x).get(y));
    		index++;
    		//As mentioned before, in each iteration it has to validate the direction
    		sum = y+x;
    		isEven = (sum%2==0) ? true:false;
    		
    		if(isEven) {
    			if(y==0 || x==row-1) {
    				//If the value of x is equal to the max number of rows-1 then only the y coordinate increments,
    				//otherwise the x will increment, so it can "move" a level below. 
    				if(x==row-1) {
    					y++;
    				}else {
    					x++;
    				}
    			//If the pointer is not located in the top levels, then it will move one level down and one level
    			//to the left
    			}else {
    				x++;
    				y--;
    			}
    		}else { //if Odd
    			if(x==0 || y==col-1) {
    				//If the value of y is equal to the max number of columns-1 then only the x coordinate increments,
    				//otherwise the y will increment, so if can "move" a level to the right
    				if(y==col-1) {
    					x++;
    				}else {
    					y++;
    				}
    			//If the pointer is not located in the top levels, then it will move one level to the right and one
    			//level below.
    			}else {
    				y++;
    				x--;
    			}
    		}
    		
    		System.out.println(res);
    		System.out.println(x);
    		System.out.println(y);
    		System.out.println();
    		
    	}//End of while
    	
    	
    	System.out.println(res);
        return res;
    
    }//End of zigzagTraverse
    
    public static void main(String[] args){
        
    	List<List<Integer>> test0 = new ArrayList<List<Integer>>();
        test0.add(new ArrayList<Integer>(Arrays.asList(1, 3, 4, 10)));
        test0.add(new ArrayList<Integer>(Arrays.asList(2, 5, 9, 11)));
        test0.add(new ArrayList<Integer>(Arrays.asList(6, 8, 12, 15)));
        test0.add(new ArrayList<Integer>(Arrays.asList(7, 13, 14, 16)));
    	zigzagTraverse(test0); //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    	
    	
    	List<List<Integer>> test1 = new ArrayList<List<Integer>>();
    	test1.add(new ArrayList<Integer>(Arrays.asList(1, 2, 3, 4, 5)));
    	zigzagTraverse(test1);//[1,2,3,4,5]
    	
    	
    	List<List<Integer>> test2 = new ArrayList<List<Integer>>();
    	test2.add(new ArrayList<Integer>(Arrays.asList(1, 3, 4, 10, 11)));
    	test2.add(new ArrayList<Integer>(Arrays.asList(2, 5, 9, 12, 20)));
    	test2.add(new ArrayList<Integer>(Arrays.asList(6, 8, 13, 19, 21)));
    	test2.add(new ArrayList<Integer>(Arrays.asList(7, 14, 18, 22, 27)));
    	test2.add(new ArrayList<Integer>(Arrays.asList(15, 17, 23, 26, 28)));
    	test2.add(new ArrayList<Integer>(Arrays.asList(16, 24, 25, 29, 30)));
    	zigzagTraverse(test2);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    	
    	
    }//End of main
    
}//End of class
