/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 토끼와 거북이 알고리즘 사용
    // 헤드가 없거나 헤드에 링크된것이 없나
    if (!head || !head.next) {
        return false;
    }
    
    let slow = head
    let fast = head.next

    while(slow !== fast) {
        // 사이클이 없는경우
        // fast가 null이거나 fast의 다음이 null이거나
        if(!fast || !fast.next) {
            return false;
        }
    
        slow = slow.next
        fast = fast.next.next
    }

    return true;
     
};