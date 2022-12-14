/**
reference:
http://btv.melezinek.cz/binary-search-tree.html
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is 
 * connected to other nodes to form the tree. 
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set 
 * after the new node is instantiated.
 */
class BSTNode { // TreeNode , node
    constructor(data) {
      this.data = data;
      this.left = null; // a BSTNode with a smaller value
      this.right = null;
    }
  }
  
  /**
   * Represents an ordered tree of nodes where 
   * the data of left nodes are <= to their parent and
   * the data of right nodes are > their parent's data.
   */
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    /**
     * Recursively counts the total number of nodes in this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */
    size(node = this.root) {
      let count = 0
      if (node == null) {
        return 0
      }
      if (node) {
        count++;
        return count + this.size(node.left) + this.size(node.right)
      }
    }
  
    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    height(node = this.root) {
      if (node == null) {
        return 0
      }
      else {
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        if (leftHeight > rightHeight){
          return leftHeight +1
        }
        else {
          return rightHeight +1
        }
      }
    }
  
    /**
     * Determines if this tree is a full tree. A full tree is a tree where every
     * node has both a left and a right except for the leaf nodes (last nodes)
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {boolean} Indicates if this tree is full.
     */
    isFull(node = this.root) { }
  
  
    // HELPER METHOD
    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
      if (!node) {
        return;
      }
  
      spaceCnt += spaceIncr;
      this.print(node.right, spaceCnt);
  
      console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
      );
  
      this.print(node.left, spaceCnt);
    }
    insert(newVal, curr = this.root) {
      let newNode = new BSTNode(newVal);
      if (!curr) {
        this.root = newNode;
        return this;
      }
      while (curr) {
        if (newVal < curr.data) {
          if (!curr.left) {
            curr.left = newNode
            return this;
          }
          curr = curr.left;
        } else if (newVal >= curr.data) {
          if (!curr.right) {
            curr.right = newNode;
            return this;
          }
          curr = curr.right
        }
      }
    }
  
  
  }
  
  const emptyTree = new BinarySearchTree();
  const oneNodeTree = new BinarySearchTree();
  oneNodeTree.root = new BSTNode(10);
  // oneNodeTree.print()
  
  /* twoLevelTree
          root
          10
        /   \
      5     15
  */
  const twoLevelTree = new BinarySearchTree();
  twoLevelTree.root = new BSTNode(10);
  twoLevelTree.root.left = new BSTNode(5);
  twoLevelTree.root.right = new BSTNode(15);
  // twoLevelTree.print()
  
  /* threeLevelTree 
          root
          10
        /   \
      5     15
    / \    / \
  2   8  13  20
  */
  const threeLevelTree = new BinarySearchTree();
  threeLevelTree.insert(10)
  threeLevelTree.root = new BSTNode(10);
  threeLevelTree.root.left = new BSTNode(5);
  threeLevelTree.root.left.left = new BSTNode(2);
  threeLevelTree.root.left.right = new BSTNode(8);
  threeLevelTree.root.right = new BSTNode(15);
  threeLevelTree.root.right.right = new BSTNode(20);
  threeLevelTree.root.right.left = new BSTNode(13);
  threeLevelTree.print()
  /* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */
  
  
  const fullTree = new BinarySearchTree();
  fullTree
    .insert(25)
    .insert(15)
    .insert(10)
    .insert(22)
    .insert(4)
    .insert(12)
    .insert(18)
    .insert(24)
    .insert(50)
    .insert(35)
    .insert(70)
    .insert(31)
    .insert(44)
    .insert(66)
    .insert(90);
  
  console.log(fullTree.size())
  console.log(fullTree.height())