# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        arr = []

        dummy = ListNode(0)       
        current = dummy

        while head:
            node = head
            afNode = head.next
            # print(node.val)
            if(afNode):
                if node.val == afNode.val:
                    print('same',node.val)
                    arr.append(node.val)
                else:
                    print('dif',node.val)
                    if node.val not in arr:
                        current.next = ListNode(node.val)
                        current = current.next
            else:
                if node.val not in arr:
                    current.next = ListNode(node.val)
                    current = current.next
            head = head.next
        return dummy.next
        