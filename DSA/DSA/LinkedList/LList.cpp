l#include<bits/stdc++.h> 
using namespace std; 


// Creating values, showvalues. 
class Node{
    public:                                          // 1. so we can use this outside the Node class.
    int data; 
    Node* next;                                
            

    
    public: 
    Node(int data1, Node* location= nullptr ) {       // In taking the values, using Node. 
        data= data1; 
        next= location; 
    }

}; 


Node* head(){
    int n, val; 
    cin >> n; 
    cin >> val; 
    Node* x= new Node(val); 
    Node* h= x ; 
    Node* p= x ;                                    // 2. Must outside the function if we don't then p and h remains undefined. 
    for (int i=1; i<=n-1; i++){
        cin >> val; 
        Node* c = new Node(val);                    // 3. "new" is must. 
        p->next = c; 
        p = c ; 
    }  
    return h; 
}


auto showValues(Node* head){
    Node* temp = head; 
    while(temp){
        cout << temp-> data << " "; 
        temp=temp->next; 
    }
    
}
Node* deletingHead(Node* head){
    if(head == nullptr) return head ;                                // when list is empty. 
    Node* temp= head; 
    head= temp->next; 
    delete temp; 
    return head; 
}


int deletingTail(Node* head){
    Node* secondlast= head;                         // 1. last and secondlast approach. 
    Node*last= head; 
    Node* temp= head; 
    while(temp){
        secondlast= last; 
        last= temp;
        temp= temp->next; 
    }
    delete last; 
    return secondlast->data; 
}


Node* deletingTail2(Node* head ){
    Node* temp = head; 
    Node* x; 
    if( temp == NULL| temp->next == NULL) return NULL;   
    while(temp->next->next!=nullptr ){// 2. remember temp->next-> next.  
        temp = temp->next; 
    }
    delete temp->next; 
    temp-> next= nullptr; 
    return head ; 
}


// insertion of an Element. 
Node* insertAnElement(Node* head,int  val){
    Node* temp = head; 
    Node* x= new Node(val); 
    while(temp->next != nullptr){               // we can use nullp
        temp= temp->next; 
    }
    temp->next= x; 
    return head; 
}
    
int main(){
    Node* temp= head();
    Node* head= deletingTail2(temp );   
    showValues(head); 
   
    return 0; 
}

