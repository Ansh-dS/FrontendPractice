#include <bits/stdc++.h> 
using namespace std; 

int f(vector<int> &arr,int low,int high){
    int i=low, j= high;
    while(i<j ){
        while(arr[low]>=arr[i]  ){
            i++; 
        }
        while(arr[low]<=arr[j] && j>= low+1){
            j--; 
        }

        if(i< j) swap(arr[i],arr[j]);
        }
    swap(arr[low],arr[j]); 
    return j;
}

void quick_sort(vector<int> &arr, int low, int high){
    int index;
    if (low >= high) return;
    if (low< high){
        index= f(arr,low, high);
    }
    quick_sort(arr,low,index-1);
    quick_sort(arr,index+1,high);
}

int main(){
    vector<int> arr= {3,92,14,27,81,299,104,201,880,11, 234,21, 43,21,84, 62,48, 22, 59,62 }; 
    quick_sort(arr, 0, arr.size()-1); 
    for(auto it: arr){
        cout << it << " "; 
    }
    return 0; 
}