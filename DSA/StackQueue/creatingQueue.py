class Queue(): 
    def __init__(self, tempL= [],mainL= []):             # to make variable public(so we can use them into                                                  
        self.tempL= tempL                                #other methods we have to define them inside __init__)
        self.mainL= mainL
        
    #name= " anshdeep "
    def push(self, val): 
        if (len(self.mainL)==0): 
            self.mainL.append(val)
            #print(name)                                 # name is not defined as didn't declear under __init__
        else:
            self.tempL= val 
            self.mainL.append(val)
            
            
             
    def pop(self): 
        self.mainL.pop(0)
        
        
x= Queue()
x.push(1)
x.push(2)
x.push(3)

print(x.mainL)
