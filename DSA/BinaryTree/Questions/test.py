class Node:
    def __init__(self, data, left=None, right=None): 
        self.data= data
        self.left= left
        self.right= right


    def binaryTree(): 
        root = Node(1)
        root.right = Node(2)
        root.left = Node(3)
        root.left.left = Node(4)
        root.left.right = Node(5)
        root.left.right.left = Node(6)
        root.right.left = Node(7)
        root.right.right = Node(8)
        root.right.right.right = Node(10)
        root.right.right.left = Node(9)
        return root
        
        
    def isBinarySearchTree(root): 
       
        if(root.left== None or root.right==  None): 
            return 
        main= root.data
        x= root.left.data
        y= root.right.data 
        if( root.left.data < root.data or root.right.data >root.data): 
            pass 
        else: 
            return "Not a BST"
       
        Node.isBinarySearchTree(root.left)
        Node.isBinarySearchTree(root.right)
        
        
    def main():
        root= Node.binaryTree()
        result= Node.isBinarySearchTree(root)
        if result== None: 
            print("Yes a BST")
        else: 
            print("Not a BST")
        
    
    
Node.main()