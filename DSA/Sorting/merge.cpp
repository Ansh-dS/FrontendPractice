#include <iostream>
#include<vector> 
using namespace std; 
void merge(vector<int>& arr,  int low, int mid, int high){
    int i=low, j=mid+1; 
    vector<int> temp; 
    while(i<=mid && j<=high){
        if(arr[i]<=arr[j]){
            temp.push_back(arr[i]); 
            i++; 
        } 
        else{temp.push_back(arr[j]); j++;  }; 
    }

    if (i > mid) {
    while (j <= high) {
        temp.push_back(arr[j]);
        j++;
    }
    } else {
        while (i <= mid) {
            temp.push_back(arr[i]);
            i++;    
        }
    }

    for(int i=low; i<=high; i++){
        arr[i]= temp[i-low ];                                           // 
    }
}
void ms(vector<int>& arr, int low, int high){
    if(low == high) return; 
    int mid= (low+high)/2; 
    ms(arr, low ,mid ); 
    ms(arr, mid+1, high); 
    merge(arr, low, mid, high ); 
}
vector<int> mergesort(vector<int>& arr, int n){
    ms(arr, 0,n-1); 
    return arr; 
}

int main(){
    vector<int> a= {1, 34 , 342, 3212, 3, 23 ,42, 21, 4, 5}; 
    vector<int> b= mergesort(a, 10); 
    for(auto it: b ){
        cout << it << ' '; 
    } 
    return 0; 
}