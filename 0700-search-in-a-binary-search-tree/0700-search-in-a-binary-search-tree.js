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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {

    let result;    
    function a(root, val) {

        if(!root) {
            return
        }
        if(root.val == val) {
            result = root
        }
        // console.log(root.val)
        a(root.left, val)
        a(root.right, val)


    }

    a(root, val)
    

    return result ? result : null
    
};