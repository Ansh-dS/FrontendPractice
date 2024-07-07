class Node: 
# CREATING VALUES, RETURNING HEAD, SHOWVALUES. 
    def __init__(self, data, next= None):
        self.data= data
        self.next= next
      
     
    def head(list):
        if len(list)== 0:                   # smallest edge case.
            return None
        for i in range(len(list)):           
            if i==0:
                h= Node(list[i])            
                p=h                         #No need to pass the id(Node(list[i]))
                
            else:
                c= Node(list[i])
                p.next= c
                p=c
        return h                             
    
    
    def showValues(head):
        temp= head
        if temp== None: 
            return None
        while(temp): 
            print(temp.data, end= " ")
            temp= temp.next
        return        
        
        
# DELETING HEAD. 
    def deletingHead(head):
        temp= head
        if temp== None: 
            temp= head
            head= head.next
            del temp
        return head


# DELETING TAIL.
    def deletingTail1(head):
        temp= head
        if (temp == None or temp.next== None):      #edge case.  
            return None
        last= None 
        while(temp):                                #before didn't include the "last."
            secondlast= last 
            last= temp
            temp = temp.next
            
        del last       
        return secondlast.data
            
        
    def deletingTail2(head): 
        temp= head
        if (temp == None or temp.next== None):      #edge case.  
            return None
        while(temp.next.next != None): 
            temp= temp.next
        del temp.next
        return temp.data

    
    def deletingKthElement(head, position): 
        if (head== None):
            return None 
        temp= head
        count=1
        while(temp):
            if( position==1): 
                head= temp.next
                del temp
                
            
            
            elif(temp.next==None):  # no need to make a  case for last element.
                if (position==count): 
                    del temp.next
                    temp.next= None 
                    break
        
        
            else:                           #this is taking care of the elif block. 
                if(count== position-1): 
                    var= temp.next.next
                    del temp.next
                    temp.next= var
                    break
                
            temp=temp.next
            count+=1
        return head   
   
         
    
    def deletingAValue(head, val):              
        temp= head
        pervious= None
        current= None
        while(temp):
            
            if (current != None): 
                pervious=  current     #second and secondlast approach
            current = temp 
            
            if (temp.data== val):
                
                pervious.next= current.next
                del current 
                temp= pervious
                current= pervious 
                
            temp= temp.next
    
        return head
        
        
    def insertThisValue(head, position, val):
        count = 1
        temp = head
         
        while temp:
            previous = current
            current = temp
            if count == 1:
                x = Node(val)
                x.next = temp
                break
            
            else:  # Indentation fixed here
                if count == position:
                        x = Node(val)
                        x.next = current
                        previous.next = x
                        

    
        
            
    @staticmethod   
    def main(): 
       list=[1,2,3,4,5,6,7,8,9,10] 
       head= Node.head(list)    
       head= Node.test(head)
       Node.showValues(head)
      
       
Node.main()