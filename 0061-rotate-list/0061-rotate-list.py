# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def rotateRight(self, head, k):
        """
        :type head: ListNode
        :type k: int
        :rtype: ListNode
        """
        
        if not head:            # head = [] 예외처리
            return head

        temp = head

        # 사이즈 구하기 limit 에러때문에
        cnt = 0
        while temp:
            cnt += 1
            temp = temp.next

        k %= cnt

        temp = head

        for i in range(k):
            dummy = ListNode(0)
            current = dummy
            dummy2 = ListNode(1)
            current2 = dummy2
            while temp:
                if temp.next:
                    current.next = ListNode(temp.val)
                    current = current.next
                else:
                    current2.next = ListNode(temp.val)
                    current2 = current2.next
                temp = temp.next 

            current2.next = dummy.next
            temp = dummy2.next        

        return temp



        
        
