# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def reverseBetween(self, head, left, right):
        """
        :type head: ListNode
        :type left: int
        :type right: int
        :rtype: ListNode
        """
        if left == right:
            return head
        dummy = ListNode(0)
        current = dummy

        cnt = 0;
        isStart = False;
        word = []
        temp = ''

        while head:            
            word.append(head.val)
            head = head.next

        reversePart = word[left-1:right][::-1]              # ::-1 는 reverse구나

        word[left-1:right] = reversePart


        for n in word:
            current.next = ListNode(n)
            current = current.next


        return dummy.next
        