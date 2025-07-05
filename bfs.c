#include <stdio.h>
#include <stdlib.h>

struct queue {
    int size;
    int f;
    int r;
    int *arr;
};

// Function prototypes
int isFull(struct queue *q) {
    if (q->r == q->size - 1) {
        printf("The queue is full\n");
        return 1;
    }
    return 0;
}

int isEmpty(struct queue *q) {
    if (q->r == q->f) {
        printf("The queue is Empty\n");
        return 1;
    }
    return 0;
}

// Enqueue function
void enqueue(struct queue *q, int val) {
    if (isFull(q)) {
        printf("The Queue is full\n");
    } else {
        q->r++;
        q->arr[q->r] = val;
           printf("Enqueued: % d \n", val);  // For display the whole enqueue array ;   
    }
}

// Dequeue function
int dequeue(struct queue *q) {
    int a = -1;
    if (isEmpty(q)) {
        printf("The Queue is Empty\n");
    } else {
        q->f++;
        a = q->arr[q->f];
    }
    return a;
}

int main() {
    struct queue q;
    q.size = 100;
    q.f = q.r = -1;  // Initialization
    q.arr = (int *)malloc(q.size * sizeof(int));

    // Call enqueue inside main
//     enqueue(&q, 12);
//     enqueue(&q, 13);
//     enqueue(&q, 159);
//     enqueue(&q, 158);
//     enqueue(&q, 157);
//     enqueue(&q, 156);
//       enqueue(&q, 155);
//   enqueue(&q, 154);
//   enqueue(&q, 151);
//    enqueue(&q, 152);
// enqueue(&q, 153);


//     // Call dequeue and print the result
//     int d1 = dequeue(&q);
//     printf("Dequeued: %d\n", d1);

//     int d2 = dequeue(&q);
//     printf("Dequeued: %d\n", d2);



//     int d3 = dequeue(&q);
//     printf("Dequeued: %d\n", d3);

//     int d4 = dequeue(&q);
//     printf("Dequeued: %d\n", d4);

//     int d11 = dequeue(&q);
//     printf("Dequeued: %d\n", d11);

//     int d5 = dequeue(&q);
//     printf("Dequeued: %d\n", d5);

//     int d6 = dequeue(&q);
//     printf("Dequeued: %d\n", d6);

//     int d7 = dequeue(&q);
//     printf("Dequeued: %d\n", d7);

//     int d8 = dequeue(&q);
//     printf("Dequeued: %d\n", d8);

//     int d9 = dequeue(&q);
//     printf("Dequeued: %d\n", d9);
//     int d10 = dequeue(&q);
//     printf("Dequeued: %d\n", d10);


    
    // int d11 = dequeue(&q);
    // printf("Dequeued: %d\n", d11);




    //Bfs Implementation

int node;
int i=1;
int visited[7]={0,0,0,0,0,0,0};
int a [7] [ 7] = {
   { 0,1,1,1,0,0,0},
   { 1,0,1,0,0,0,0},
   { 1,1,0,1,1,0,0},
   { 1,0,1,0,1,0,0},
   { 0,0,1,1,0,1,1},
   { 0,0,0,0,1,0,0},
   { 0,0,0,0,1,0,0},
};

printf("%d",i);
visited[i] = 1;
enqueue(&q,i);
while(!isEmpty(&q)) {
    node = dequeue(&q);
    for(int j=0; j<7; j++){
        if(a[node][j] == 1 && visited[j] == 0){
            printf("%d",j);
            visited[j]=1;
            enqueue(&q,j);
        }
    }
}

    // free(q.arr);  // Clean up memory
    return 0;
}


