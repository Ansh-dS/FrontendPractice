arr= [22,  11, 102, 104, 4, 0, 1, 10, 40, 38]
def sort(arr,low, mid, high): 
    temp =[] 
    while(i!=len(arr1) or j!=len(arr2)):                #don't use pop as decreases the size. 
        while(arr1[i]>arr[j]):
            temp.append(j)
            j+=1

        while(arr[]>arr[i]):                          # Think about test cases.
            temp.append(i)
            i+=1
    
    if (i==len(arr1)):
        while(arr1[j] ):
            temp.append(j)
            j+=1
    
    while(arr1[i] ):
            temp.append(i)
            i+=1
            
    for i in range(low, high):                           # we are replacing the values of only some part of array.
        arr[i]= temp[i-low]
        
            
        
            
def divide(arr, low,high):
    if ( low ==high):
        return  
    mid= ( low +high)/2                                             
    divide(arr, low,mid)                                      # Think about test cases. 
    divide(arr, mid+1, high)
    sort(arr, low,mid,high])                        # don't pass array over here pass high and low values. 