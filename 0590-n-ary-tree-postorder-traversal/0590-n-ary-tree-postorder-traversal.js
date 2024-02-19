/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let result = [];

    function traversal(node) {

        if(!node) {
            return
        }
        if(node.children) {
            for(child of node.children) {
                traversal(child)
            }
        }

        result.push(node.val)

    }


    traversal(root)

    return result


};








