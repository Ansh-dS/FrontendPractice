#include<vector>
#include<iostream> 
using namespace std; 

int consecutiveOnes(vector<int>& arr){
    int count=0, max=0; 
    for(int i=0; i<arr.size(); i++){
        if(arr[i]==1){
            count++; 
        }
        else{
            if (max<=count){                        // changes i had made. 
                max= count;
                count= 0;  
            }  
            else{ count=0; }                        // changes i had made. 
        }
    }
    if (max<count){                                 // changes i had made. 
        max= count;
        count= 0;  
    } 
    
    return max; 
}



int main(){
    vector<int> arr= {0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0}; 
    int result= consecutiveOnes(arr); 
    cout << result;
    return 0; 
}