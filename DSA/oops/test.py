class Stri: 
  def __init__(self,newString):
    self.newString= newString
    
    
  def showValue(self):
    print(self.newString)
    
    
  def __add__(string1, string2):
    result= ""
   
    for i in range(min(len(string1.newString),len(string2.newString))):
        result+=string1.newString[i]+string2.newString[i]
        
    if (len(string1.newString)>len(string2.newString)):
        result+= string1.newString[len(string2.newString):len(string1.newString)]
    else:
        result+= string2.newString[len(string1.newString):len(string2.newString)]
    
    return Stri(result)

        
a= Stri("ansh" )
b= Stri("Deepsingh")
c= a+b                  # return value to class,to create a new object, after conbining both inside __add__ function objects gets add up 
c.showValue()


