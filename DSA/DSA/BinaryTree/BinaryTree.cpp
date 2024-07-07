#include <iostream>
using namespace std; 


class Node{                             /* i. In starting left right will be null. */ 
    public: 
    int data; 
    Node* right;                         /* 2. left, right are memory locations not nodes. */
    Node* left; 
    
    public: 
    Node(int data, Node* right= nullptr , Node* left=nullptr ){ /*how i am filling right and left locations? 
        calling for the right then calling for the left. */
        this->data= data;                // use "this" keyword otherwise compiler gets confused. 
        this->right= right; 
        this->left= left; 
    }

}; 
/*Node* head(){     no need to head over here like we did in linkedlist. 
       
  }*/
Node* creatingABinaryTree(){
                  /*how to create a binary tree? 
                                    1.create a node. 
                                    2.write the whole binary structer 
                                    in c++*/ 
    Node* root = new Node(1); 
    root-> right= new Node(2);           /*3. we have to give the name to root to define the right and left of whome. */
    
    root->left = new Node(3); 
    root->  left -> left= new Node(4);        /*this is possible here but not into linkedlist. */
    root-> left ->right= new Node(5); 
    root-> left ->right->left= new Node(6); 
    
    
    root-> right -> left= new Node(7); 
    root-> right-> right= new Node(8); 
    root-> right-> right->right= new Node(10); 
    root-> right-> right->left= new Node(9); 
    return root; 
}



void traversingRootLeftRight(Node* temp){
    if (temp == nullptr) return; 
    cout << temp->data << " "; 
    traversingRootLeftRight(temp->left);  
    traversingRootLeftRight(temp-> right); 
    
}


void traversingLeftRootRight(Node* temp){
    if (temp== nullptr) return; 
    traversingLeftRootRight(temp->left); 
    cout <<temp->data<< " "; 
    traversingLeftRootRight(temp->right); 

}


void traversingLeftRightRoot(Node* temp){
    if (temp== nullptr) return; 
    traversingLeftRightRoot(temp->left); 
    traversingLeftRightRoot(temp->right); 
    cout << temp->data << " ";  
}


int main() {      
    Node* root= creatingABinaryTree(); 
    traversingRootLeftRight(root); 
    cout << endl; 
    traversingLeftRootRight(root); 
    cout << "\n"; 
    traversingLeftRightRoot(root); 
    return 0;
}