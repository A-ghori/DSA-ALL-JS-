#include<stdio.h>



void printArray(int*A,int n){
    for (int i=0; i<n ; i++){
        printf("   %d",A[i]);
    };
    printf("\n");
};



void bubbleSort(int*A,int n){
    int temp;
    for(int i =0;i<n-1;i++){
        printf("Working on pass the number %  d\n",i+1);
        for (int j=0;j<n-1-i;j++){
            if(A[j]>A[j+1]){
                temp=A[j];
                A[j]=A[j+1];
                A[j+1]= temp;
            }
        }
    }
}




void bubbleSortAdaptive(int*A,int n){
    int temp;
   int isSorted=0;
   for(int i =0; i<n-1;i++){
    printf("Working on pass of the number %d \n",i+1);//i++=i+1
isSorted =1;
for(int j=0; j<n-1-i; j++){
    if(A[j]>A[j+1]){
        temp = A[j];
        A[j]=A[j+1];
        temp = A[j+1];
        isSorted=0;
    }
}   
if(isSorted){
 return;
}

}


}




int main(){
    int A[]={1,2,5,625,8,325,70,20,10};
    int n=9;
printArray(A,n);
printf("AFter Sorting the Values ");
bubbleSort(A,n);
bubbleSortAdaptive(A,n);
printArray(A,n);
return 0;

}