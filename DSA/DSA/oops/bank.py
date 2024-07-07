class Bank:
    bankName= "SBI"
    def  __init__(self, balance, accNo): 
        self.balance= balance
        self.accNo= accNo
    
    def credit(self,withdraw):  
        self.balance-=withdraw
        
    def debit(self,add): 
        self.balance+= add
        
    def getBalance(self): 
        print(self.balance)
        
    @staticmethod                          # without this "self.dil()" gives error, you have to use "Bank.dil()"
    def dil():
        print("My name is aman")
    
    @classmethod
    def changeBankName(self, new, new2):
        self.location= new
        self.bankName= new2
        
        
class CoustomerCare(Bank):
    def __init__(self, name, surname, bal, acc):           # value of other __init__ stored here. 
        self.name= name
        self.surname= surname
        super().__init__( bal, acc)                        # super must be under a function containing "self". 
        super().getBalance()                               
        super().dil()
        # super().bankName                                 # only applied on functions. 
       
x= Bank(3000, 83838383)
x.changeBankName("kirtiNagar", "AU")
print(Bank.location)
