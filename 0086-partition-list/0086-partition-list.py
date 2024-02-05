# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def partition(self, head, x):
        """
        :type head: ListNode
        :type x: int
        :rtype: ListNode
        """
        
        temp = head

        dummy = ListNode(0)
        current = dummy
        dummy2 = ListNode(1)
        current2 = dummy2

        while head:
            if head.val < x:
                current.next = ListNode(head.val)
                current = current.next
            else:
                current2.next = ListNode(head.val)
                current2 = current2.next

            head = head.next

        current.next = dummy2.next

        return dummy.next