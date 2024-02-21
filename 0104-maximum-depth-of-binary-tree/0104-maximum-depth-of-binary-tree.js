/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    let result = 0;

    function traversal(root, depth) {

        if(!root) {
            return 
        }
        result = Math.max(result, depth)
        traversal(root.left, depth + 1)
        traversal(root.right, depth + 1)
    }

    traversal(root, result + 1)

    return result
};