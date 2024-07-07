// 2nd moving front elements to back. not working in online compiler. 
#include <iostream>
#include <vector> 
using namespace std;
vector<int> rotateArray(vector<int>arr, int k) {
    for(int i=0; i<k;i++){
        arr.push_back(arr[0]); 
        arr.erase(arr.begin()); 
    }
    return arr; 
}

int main() {
    vector<int> arr={1, 3, 6, 11, 12, 17}; 
    vector<int> ar= rotateArray(arr, 4); 
    for(auto it: ar){
        cout << it << ' '; 
    }
    return 0;
}