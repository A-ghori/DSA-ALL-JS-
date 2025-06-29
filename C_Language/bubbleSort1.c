#include<stdio.h>

void printArray(int*A, int n){
for (int i=0;i<n;i++){
         printf(" % d  ",A[i]);
    }
};


void bubbleSort(int *A , int n){
    int temp;
    for(int i =0; i<n-1; i++){
        printf("Working on passing the values % d \n", i+1);
        for(int j=0; j<n-1-i; j++){
            if(A[j]>A[j+1]){
                temp = A[j];
                A[j]=A[j+1];
                A[j+1]=temp;
            }
        }
    }
}

// void bubbleSortAdaptive(int *A, int n){
//     int temp ;
//     // int isSorted=0;
//     for (int i = 0;i<n-1;i++){
//         printf("Working on pass the number % d\n",i+1);
//         for(int j=0; j<n-1-i; j++){
//             if(A[j]>A[j+1]){
//                 temp = A[j];
//                 A[j]=A[j+1];
//                 A[j+1]=temp;
//             }
//         }
//     }
// }


int main (){
    int A[]={1,5,5,9,2,34,86,665,97,20};
    // int A[]={1,2,2,5,6,7,8};
    int n=9;
    printArray(A,n);
    bubbleSort(A,n);
    printArray(A,n);
    return 0;
}