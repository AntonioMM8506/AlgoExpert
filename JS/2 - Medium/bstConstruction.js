class BST {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }//End of constructor


    insert(value) {
        if(value < this.value){
          if(this.left == null){
            this.left = new BST(value);
          }else{
            this.left.insert(value);
          }
        } else {
          if(this.right== null){
            this.right = new BST(value);
          }else{
            this.right.insert(value);
          }
        }

        return this;
    }//End of insert


    contains(value) {
      if(value < this.value){
        if(this.left == null){
          return false;
        }else {
          return this.left.contains(value);
        }
      }else if(value > this.value){
        if(this.right == null){
          return false;
        }else{
          return this.right.contains(value);
        }
      } else {
        return true;
      }

    }//End of contains


    remove(value, parent = null) {
        if(value < this.value){
          if(this.left != null){
            this.left.remove(value, this);
          }
        }else if(value > this.value){
          if(this.right != null){
            this.right.remove(value, this);
          }
        }else{
          if(this.left != null && this.right != null){
            this.value = this.right.getMinValue();
            this.right.remove(this.value, this);
          } else if(parent == null){
            if(this.left != null){
              this.value = this.left.value;
              this.right = this.left.right;
              this.left = this.left.left;
            }else if(this.right != null){
              this.value = this.right.value;
              this.left = this.right.left;
              this.right = this.right.right;
            }
          } else if(parent.left == this){
            parent.left = (this.left != null) ? this.left : this.right; 
          } else if(parent.right == this){
            parent.right = (this.left != null) ? this.left : this.right;
          }
        }
        
        return this;
    }//End of remove


    getMinValue(){
      if(this.left == null){
        return this.value;
      }else{
        return this.left.getMinValue();
      }
    }//End of getMinValue

}//End of BST

//Test -----------------------------------------
const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

root.insert(12);
root.remove(10);