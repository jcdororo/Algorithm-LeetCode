/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {

    function makeBinary(nums) {
        if(nums.length == 0) {
            return null
        }
        let maxNum = Math.max(...nums)
        
        let root = new TreeNode(maxNum)
        let index = nums.indexOf(maxNum)
        let arrLeft = nums.slice(0, index)
        let arrRight = nums.slice(index+1, nums.length)
        // console.log(arrLeft, arrRight)

        root.left = makeBinary(arrLeft)
        root.right = makeBinary(arrRight)

        return root

    }
    let result = makeBinary(nums)


    return result
    


};