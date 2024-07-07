#include<iostream> 
#include<vector>   
using namespace std; 

//three possible cases of all linkedlists: inputs= 0, 1, N 
class Node{                                             // Decelration of attributes and in taking values 
    public:                                             // we create two different codes for that but in python
    int data;                                           // we have __init__ function.                 
    Node* next;                                         
    Node* back; 

    public: 
    Node(int val, Node* next= nullptr, Node* back=nullptr){
        data= val; 
        next= next; 
        back= back;        
    }    
}; 

Node* head(vector<int> arr){
    Node* h= new Node(arr[0]); 
    Node* previous= h; 


    for(int i=1;i<=arr.size();i++){                                  // two pointer approach. 
        Node* current=  new Node(arr[i], nullptr, nullptr); 
        previous->next= current; 
        current->back = previous; 
        previous= current; 
    }
    
    return h; 
}


void showValues(Node* h ){
    Node* temp= h; 
    while(temp-> next != nullptr) {
        cout << temp->data << ' ';
        temp=temp->next;    
    }
    
     
}


Node* deletingTheHead(Node* h){
    Node* temp = h;
    h= temp->next; 
    h->back= nullptr; 
    delete temp; 
    return h; 
}


Node* deletingKthPosition(Node* h, int position){
    Node* temp = h;
    int count= 1; 
    Node* previous = NULL; 
    Node* current= NULL;
    if ( h== NULL | h->next==NULL) return NULL; 
    while(temp){
        previous  =current ;
        current = temp; 
        if (position==1){
            h= temp->next; 
            h->back= nullptr; 
            delete temp; 
            return h;
            break; 
        }
        
        else if(position== count){
            previous->next= current->next; 
            if( current->next != nullptr){
                Node* temp1= current-> next; 
                //last->next->back= secondlast;  // can't fetch the memory location through this statement. 
                temp1->back= previous; 
            }
            delete current; 
            break; 
        }
        
        temp=temp->next; 
        count++; 
    }
    return h;  
}


int main(){
    vector<int> arr={1,2,3,4,5};
    Node* h= head(arr);
    Node* result= deletingKthPosition(h,6); 
    showValues(result); 
    return 0;
}


// create linkedlist form stack and queue. 