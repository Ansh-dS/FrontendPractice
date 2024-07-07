class Node:
    def __init__(self, data, next=None, back=None): 
        self.data= data
        self.next= next
        self.back = back
        
    def head(arr):
        for i in range(len(arr)): 
            if (i==0): 
                h= Node(arr[i])                                      # h= head of LinkedList.
                p= h                                                 # p = pervious Node. 
                
            else:
                c= Node(arr[i])                                      # c= current node. 
                p.next= c
                c.back= p
                p= c

        return h
    
    def traversingForward(h): 
        temp= h
        while(temp != None): 
            print(temp.data, end=" ")
            temp= temp.next
        print("\n")
            
    def traversingBackwards(h):
        temp= h
        while(temp.next != None):                   # don't use temp.next as can't able fetch last value
            temp= temp.next
        
        while(temp!= None): 
            print(temp.data,end= " ")
            temp=temp.back
            
            
def main(): 
    arr= [1, 2, 3,4, 5 ]                                                
    h= Node.head(arr)                                            # pass by referance arr. 
    Node.traversingForward(h)
    Node.traversingBackwards(h)
                                                                                        
main()