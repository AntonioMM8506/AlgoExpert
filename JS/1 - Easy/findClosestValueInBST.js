function findClosestValueInBst(tree, target) {
    let currentNode = tree;
	let closestVal = tree.value;
	
	while(currentNode != null){
		if(Math.abs(target-closestVal) > Math.abs(target-currentNode.value)){
			closestVal = currentNode.value;
		}
		currentNode = (target<currentNode.value)? currentNode.left : currentNode.right;
	}
	
    console.log(closestVal);
	return closestVal;
	
}//End of findClosestValueInBST


// This is the class of the input tree.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}//End of BST


//Sandbox
const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);
findClosestValueInBst(root, 12);