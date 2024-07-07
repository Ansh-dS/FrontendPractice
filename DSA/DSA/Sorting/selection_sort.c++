#include<iostream>
#include<map>
using namespace std; 
int main() {
    // Intaking values. 
    int s;
    cin >> s; 
    int array[s]= {0}; 
    for(int i=0;i<s;i++){
        cin >> array[i];
    }
    
    
    // Selection sort. 
    int min,mini;
    for(int i=0;i<s;i++){
        bool flag= true; 
        // Finding minimum. 
        for(int j=i+1;j<s;j++){
            if(flag==true){
                min= array[i]; 
                flag= false; 
            }
            if(array[j] <min){ 
                min =array[j];
                mini= j; 
            }
        }
       // swaping 
        cout << array[i]<< ' ' << array[mini]<< "\n"; 
        swap(array[i],array[mini]); 
    
    }
    
    for (int i=0;i<s;i++){
    cout << array[i] << ' '; 
    }
    return 0;
}

