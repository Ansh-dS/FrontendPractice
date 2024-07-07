import math as m 

class Shape:
    def __init__(self, name ): 
        self.name= name
    
    # @staticmethod                                             don't make static methods as can't be overridden                                              
    def area(self):                                                 
        print("Choose the specific class")
    
    # @staticmethod  
    def perimeter(self): 
        print(" Choose the specific class")
        
           
class Triangle(Shape):
    def __init__(self, breadth, height):                        # b= bredth, h= height
        self.b= breadth
        self.h= height
        super().__init__("Triangle")                            # name was common code, soo we created above and fetch it. 
        
    def area(self ):                                              
        print((1/2)*self.b*self.h)
        
    def perimeter(self ): 
        s= m.sqrt(self.h**2 + self.b**2)
        print(2*s+ 2*self.b)                                      # s= slant height   
    
    
class Circle(Shape): 
    def __init__(self, radius):                                   # r= radius.   
        self.r= radius
        super().__init__("Circle")
        
    def area(self): 
        print(3.14*self.r**2)                                        
       
    def perimeter(self): 
        print(3.14*self.r*2)
                
class Rectangle(Shape): 
    def __init__(self, breadth, height): 
        self.b= breadth
        self.h= height
        super().__init__("Rectangle")
        
    def area(self): 
        print(self.h*self.b)
        
    def perimeter(self):                                               
        print(2*(self.b+self.h))
        
        

triangle= Triangle(3,4)
triangle.perimeter()
print(triangle.name)