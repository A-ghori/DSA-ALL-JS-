#include<stdio.h>

void PrintArray(int*A,int n){
    for (int i =0;i<n;i++){
        printf("%d",A[i]);
    }
    printf("\n");
}

void Merge(int A[],int mid,int low, int high){
    int i , j, k, B[100];
    i = low;
    j= mid+1;
    k= low;
    while(i<=mid && j<=high){
        if(A[i]< A[j]){
            B[k]=A[i];
            i++;
            k++;
        }else{
            B[k]=A[j];
            j++;
            k++;
        }
    }
    //Copy Paste the elements where it is sorted one side and another side is being sorted previously  so one side is just paste as  usual 
    while(i<=mid){
        B[k]=A[i];
        k++;
        i++;
    }
    while(j<=high){
        B[k]=A[j];
        k++;
        j++;
    }
    // Copy back to original array
    for(int i=low; i<=high; i++){
        A[i] = B[i];
    }
}

//Recursive Merge Sort 
void mergeSort(int A[], int low, int high){
    int mid;
    if(low < high){
        mid = (low + high) / 2;
        mergeSort(A, low, mid);
        mergeSort(A, mid + 1, high);
        Merge(A, mid, low, high);
    }
}

int main (){
    int A[] = {9,1,4,14,4,15,6};
    int n = 7;
    
    
    PrintArray(A,n);
    mergeSort(A,0,6); //O=low, 6=high
printf("Ater Merge Sort the Array looks Merged and Sorted with Each other \n");
    PrintArray (A,n);
return 0;

}