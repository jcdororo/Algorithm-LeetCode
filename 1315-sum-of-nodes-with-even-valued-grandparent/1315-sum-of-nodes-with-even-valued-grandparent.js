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
var sumEvenGrandparent = function(root) {
    let result = 0

    function grandTraversal(root, depth) {
        if(!root) {
            return 0
        }
        if(depth == 2) {
            result += root.val
            return 
        }
        grandTraversal(root.left, depth + 1)
        grandTraversal(root.right, depth + 1)
    }

    function traversal(root) {
        if(!root) {
            return
        }
        // root.val이 짝수라면 손자 left right까지 가서 더한다.
        if(root.val % 2 == 0) {
            grandTraversal(root.left, 1)
            grandTraversal(root.right, 1)
        }
        
        traversal(root.left)
        traversal(root.right)
    }

    traversal(root)


    return result
};