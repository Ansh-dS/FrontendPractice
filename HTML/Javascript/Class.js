function Product(name, itemNo, discount, prize){                             
        this.name= name; 
        this.itemNo= itemNo; 
        this.discount= discount; 
        this.prize= prize; 
        this.discountedPrize= function(){
            return prize*discount/100;
        }
}

let chimney= new Products("chimeny", 101, 10, 3000); 








