/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    

    let result;

    function a(cloned) {
        if(!cloned) {
            return
        }

        if(cloned.val === target.val) {
            result = cloned
        }

        a(cloned.left)
        a(cloned.right)
    }

    a(cloned)

    return result
};