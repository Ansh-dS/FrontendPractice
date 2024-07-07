List= [3,92,14,27,81,299,104,201,880,11, 234,21, 43,21,84, 62,48, 22, 59,62 ]
def Swap(List,right,left):
    firstElement= List[right]
    i,j= right, left
    while( j>i):
        while(firstElement>=List):
            if(firstElement<List[i]):
                break
            i+=1

        while(j>i ):
            if (firstElement>List[j]):
                break
            j-=1

        List[i],List[j]= List[j], List[i]
    
    
    List[i],List[right]= List[right], List[i]
    
    return i

def QuickSort(List, right,left):
    if left<= right: 
        return
                                   
    index= Swap(List, right,left)
    QuickSort(List,right,index-1)
    QuickSort(List, index+1,len(List)-1)

QuickSort(List, 0,len(List)-1)
for i in List:
    print(i,end=" ")