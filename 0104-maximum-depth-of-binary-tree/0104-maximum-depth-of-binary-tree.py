# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import deque

class Solution(object):
    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root is None:
            return 0
        
        # BFS를 사용하여 트리의 최대 깊이를 계산
        queue = deque([(root, 1)])  # (노드, 현재 깊이)
        print(queue)
        
        while queue:
            node, depth = queue.popleft()
            
            if node.left:
                queue.append((node.left, depth + 1))
            
            if node.right:
                queue.append((node.right, depth + 1))
        
        return depth