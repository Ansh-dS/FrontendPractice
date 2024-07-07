// 2nd          moving zeros to back            Can't admit the zero. 
#include <iostream>
#include <vector> 
using namespace std;
vector<int> moveZeros(int n, vector<int> a) {
    int count=0;                                                               // 
    for(int i=0;i<n;i++){
        if(a[i]==0){
            count++; 
            a.erase(a.begin()+i); 
        }
    }

    for(int i=0;i<count;i++){
        a.push_back(0); 
    }
    return a; 
}

int main() {
    vector<int> arr={0,0,0,0,1}; 
    cout << arr[2]; 
    vector<int> ar= moveZeros(5,arr); 
    for(auto it: ar){
        cout << it << ' '; 
    }
    return 0;
}