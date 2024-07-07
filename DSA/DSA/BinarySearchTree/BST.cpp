#include<iostream> 
using namespace std; 



class Node{
    public: 
    double data; 
    Node* left; 
    Node* right; 

    public: 
    Node( double data, Node* small= nullptr, Node*large=nullptr){
        this->data= data; 
        this->left= small; 
        this->right= large; 
    }
    
}; 


Node* creatingBST(){
    Node* x= new  Node(3 );
    x->left= new Node(2); 
    x-> left->left= new Node(1); 
    x-> left->right= new Node(2.5); 
    x->right= new Node(4); 
    x->right->left= new Node(3.5); 
    x->right->left->left= new Node(3.2); 
    x->right-> right= new Node(6);
    return x; 
}


Node* search(double  val,Node* temp){                                                                                    
    if(temp== nullptr) {
        cout<< "It doesn't exist" ; 
        return nullptr; 
    } 
    else if (val== temp->data){
        cout << "Yes it exist"; 
        return temp; 
    }
    
    else if (val< temp->data) temp= temp-> left; 
    
    else{
        temp= temp->right; 
    }
    return search(val, temp); 
}

                                                // What not to use? 
double ceilValue(double val, Node* temp){                // Don't use recurrsion. when function calls again val2 value gets 0.    
    double val2;  
    while(temp){
        double x= temp->data;                   // Algorithm 
                                                    //wrong: 
        if (val== temp->data){                              // Searching positions(last, secondLast) is wrong.
                                                    // Right: 
            return temp->data;                              // Storing greater or equal value . is correct.   
        }                                
                                                   
        else if (val< temp->data){                // Condition.     
            val2= temp->data ;                    // Don't need to check for "temp->data < val2" as we are going into the left
            temp= temp-> left; 
            
        
        
        } 
        
        else{
            temp= temp->right; 
        
            
        }
    }
    return val2;

}


int main(){
    Node* root= creatingBST(); 
    double  location1= ceilValue(1.2,root); 
    cout << location1;  
    return 0; 
}

