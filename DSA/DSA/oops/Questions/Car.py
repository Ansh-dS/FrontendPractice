class car:
    # Constructor function 
    def __init__(self,name,model,boughtYear,milegeOnPetrol): 
        self.name= name
        self.model= model 
        self.year= boughtYear
        self.milege= milegeOnPetrol

    # getting values. 
    def getName(self): 
        print(self.name)
        
    def getModel(self): 
        print(self.model)
        
    def getYear(self): 
        print(self.year)
        
    def getMilege(self): 
        print(self.milege)
    
    # setting values. 
    def setName(self, new): 
        self.name= new
        
    def setModel(self, new): 
        self.model= new
        
    def setYear(self, new): 
        self.year= new
        
    def setMilege(self, new): 
        self.milege= new
        
#object 
Myself= car("G-Wagon","AMG G63",2024,10)
Myself.setModel(2025)
Myself.setMilege(15)

Myself.getModel()
Myself.getMilege()

        
        
    