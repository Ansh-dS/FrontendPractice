class Node:
    def __init__(self, data, left=None, right=None): 
        self.data= data
        self.left= left
        self.right= right
        
    def main():
        root= Node("A")
        root.right= Node("J")
        root.right.left= Node("C")
        root.right.left.right= Node("F")
        root.right.left.left= Node("M")
        root.right.right= Node("G")
        
        root.right= Node("B")
        root.right.right= Node("L")
        root.right.right.left= Node("I")
        root.right.right.right= Node("E")
        
        root.right.left= Node("K")
        root.right.left.right= Node("D")
        root.right.left.left= Node("H")
    
    
Node.main()