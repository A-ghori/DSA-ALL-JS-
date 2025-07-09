/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

#include<stdio.h>
#include<stdlib.h>

//Define Node 
struct ListNode {
    int val;
    struct ListNode * next ;
};

//Create a node 

struct ListNode * createNode(int value ){
struct ListNode *newnode = (struct ListNode *) malloc(sizeof (struct ListNode));
newnode -> val =value;
newnode -> next = NULL;
return newnode;


};


//Traversal
void linkedlist(struct ListNode *ptr){
    while(ptr != NULL){
        printf("Elements are : %d \n", ptr -> val);
        ptr = ptr -> next;
    }
}

struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {

    struct ListNode * dummy = createNode (0);
    struct ListNode * curr =dummy;

    while (list1 && list2){
        if(list1 -> val > list2 -> val){
            curr -> next = list2;
            list2 = list2->next;
        }else
        {
            curr->next = list1;
            list1 = list1->next;
        }
        curr = curr-> next ; //curr->next = curr; is wrong — It makes the list circular. 
    }
    if(list1){
        curr->next = list1;
    } else if(list2){
        curr->next = list2;
    }
    return dummy->next;

}


int main() {
    // list1 = 1 -> 2 -> 4
    struct ListNode* list1 = createNode(1);
    list1->next = createNode(2);
    list1->next->next = createNode(4);

    // list2 = 1 -> 3 -> 4
    struct ListNode* list2 = createNode(1);
    list2->next = createNode(3);
    list2->next->next = createNode(4);

    // Merge and print
    struct ListNode* merged = mergeTwoLists(list1, list2);
    printf("Merged List:\n");
    linkedlist(merged);

    return 0;
}
