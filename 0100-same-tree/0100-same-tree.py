# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import deque

class Solution(object):
    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """
        if not p and not q:
            return True
        
        if not p or not q:
            return False

        if p.val != q.val:
            return False
        
        queue1 = deque([p])
        queue2 = deque([q])

        while queue1 and queue2:
            node1 = queue1.popleft()
            node2 = queue2.popleft()

            if node1.left:
                check1 = node1.left.val
                queue1.append(node1.left)
            else:
                check1 = None

            if node2.left:
                check2 = node2.left.val
                queue2.append(node2.left)
            else:
                check2 = None

            if check1 != check2:
                return False

            if node1.right:
                check1 = node1.right.val
                queue1.append(node1.right)
            else:
                check1 = None

            if node2.right:
                check2 = node2.right.val
                queue2.append(node2.right)
            else:
                check2 = None

            if check1 != check2:
                return False

        return True



