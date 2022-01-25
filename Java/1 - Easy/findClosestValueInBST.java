class Program {
    public static int findClosestValueInBst(BST tree, int target) {
        BST currentNode = tree;
        int closestVal = tree.value;
        
        while(currentNode != null){
            if(Math.abs(target-closestVal) > Math.abs(target-currentNode.value)){
                closestVal = currentNode.value;
            }
            currentNode = (target<currentNode.value)? currentNode.left : currentNode.right;
        }
        
        System.out.println(closestVal);
        return closestVal;
    }//End of findClosestValue
    
    static class BST {
        public int value;
        public BST left;
        public BST right;

        public BST(int value) {
            this.value = value;
        }
    }//End of BST
    
    public static void main(String[] args) {
        var root = new BST(10);
        root.left = new BST(5);
        root.left.left = new BST(2);
        root.left.left.left = new BST(1);
        root.left.right = new BST(5);
        root.right = new BST(15);
        root.right.left = new BST(13);
        root.right.left.right = new BST(14);
        root.right.right = new BST(22);
    
        findClosestValueInBst(root, 12);
    
    }//End of Main

}//End of class
