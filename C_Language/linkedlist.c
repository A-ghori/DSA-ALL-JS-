//Linked List 

#include <stdio.h>
#include<stdlib.h>

// Definition of the Node structure
struct Node {
    int data;
    struct Node* next;
};
//For traversal linked list 
void linkedList (struct Node* ptr){
    while(ptr != NULL){
        printf("Elements are : %d\n",ptr-> data);
ptr= ptr-> next;
    }

}


//Insertion At first Node 

struct Node* InsertionAtFirst(struct Node* head, int data){
    struct Node* ptr = (struct Node*)malloc(sizeof(struct Node));
    ptr->data = data; // Insert Data at head or Node 
    ptr->next = head;
    return ptr;
}

//Insertion At Last Node 

struct Node* InsertionAtLast (struct Node* head, int data){
    struct Node*ptr = (struct Node*)malloc(sizeof(struct Node));
    ptr-> data =data; // Insert Data at head or Node
    struct Node* p =head;
    while(p->next != NULL){
        p =p->next;
    }
        ptr-> next=NULL;
        p->next = ptr;
        return head; 

}

//ADD ELEMENT WHEREVER YOU WANT 
struct Node* InsertAfterNode(struct Node* prevNode, int data) {
    // if (prevNode == NULL) {
    //     printf("Previous node cannot be NULL\n");
    //     return NULL;
    // }
    struct Node* ptr = (struct Node*)malloc(sizeof(struct Node));
    ptr->data = data; // Insert Data at head or Node
    ptr->next = prevNode->next;
    prevNode->next = ptr;
    return prevNode;  // or return anything, if needed
}


//Deletion at First 

struct Node *DeletionAtFirst(struct Node*head)
{
    struct Node*ptr = head;
    head=head->next;
    free(ptr);
    return head;
}

// Deletion at Index
struct Node* DeletionIndex(struct Node* head, int index) {
    struct Node* p = head;
    struct Node* q = head->next;
    for (int i = 0; i < index - 1 && q != NULL; i++) {
        p = p->next;
        q = q->next;
    }
    {
        p->next = q->next;
        free(q);
    }
    return head;
}




int main(){
    struct Node* head;
    struct Node* second;
    struct Node* third;
    struct Node* forth;


    //ALlocate memory location by malloc
    head = (struct Node*)malloc(sizeof(struct Node));
    second = (struct Node*)malloc(sizeof(struct Node));
        third = (struct Node*)malloc(sizeof(struct Node));
            forth = (struct Node*)malloc(sizeof(struct Node));


//Link first and Second Node 
head -> data = 7;
head -> next =second;
//Link second and third node ;
second -> data =8;
second -> next = third;
//Link third and forth node;
third -> data = 9;
third ->next = forth;
//Link forth and pointed to null to stop the link 
forth ->data = 10;
forth -> next = NULL;
printf("Before Insertion\n");
linkedList(head);
printf("AFter Insertion At first Element\n");
head= InsertionAtFirst(head,6); 
linkedList(head);
printf("AFter Insert Element at last \n");
head=InsertionAtLast(head,11);
linkedList(head);
printf("add element at index whatever you want \n");
InsertAfterNode(third,12);
linkedList(head);
//Deletion First Element 
printf("Linked dekete the element at first \n");
head =  DeletionAtFirst(head);
// head =  DeletionAtFirst(head);
linkedList(head);
//Deletion at index
printf("SHow the whole list After deletion the first Index from the list:\n");
linkedList(head);
printf("Deletion from random Index\n");
head = DeletionIndex(head, 3);
linkedList(head);
return 0;
}