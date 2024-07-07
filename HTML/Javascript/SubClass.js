class Products{
    constructor(productType,id){                // remember. 
        this.pT=productType; 
        this.id=id; 
    }
    set SetId(val){
        this.id= val;  
    }
}

class kitchen extends Products{
    constructor(name,prize,id){
        super(name); 
        super(id); 
        super(prize); 
    }
}