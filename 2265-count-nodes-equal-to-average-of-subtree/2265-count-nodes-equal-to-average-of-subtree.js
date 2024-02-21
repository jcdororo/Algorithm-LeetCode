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
var averageOfSubtree = function(root) {
    let result = 0;
    let stack = []
    let sum = 0
    let nodeCount = 0
    stack.push(root)
    
    function traversal(root) {
        if(!root) {
            return
        }

        nodeCount += 1
        sum += root.val
        traversal(root.left)
        traversal(root.right)

        
    }

    while(stack.length) {
        node = stack.pop()
        traversal(node)
        if(parseInt(sum / nodeCount) == node.val ) {
            result += 1
        }
        nodeCount = 0
        sum = 0

        if(node.left) {
            stack.push(node.left)            
        }
        if(node.right) {
            stack.push(node.right)
        }
    }

    return result
};