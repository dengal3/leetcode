/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 
 var res = [];
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var res = [];
    
    inorder(root, res)();
    
    return res;
};

var inorder = function(node, res) {
    return function() {
        if(!node)
            return;
        if(node.left) {
            inorder(node.left, res)();
        }
        res.push(node.val);
        
        if(node.right) {
            inorder(node.right, res)();
        }
    };
}