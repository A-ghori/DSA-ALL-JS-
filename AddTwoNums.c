#include <stdio.h>
#include <stdlib.h>

// Define Node
struct Node {
    int data;
    struct Node* next;
};

// Create a new node
struct Node* createNode(int value) {
    struct Node* newNode = (struct Node*) malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;
    return newNode;
}

// Traversal
void LinkedListTraversal(struct Node* head) {
    while (head != NULL) {
        printf("Element: %d\n", head->data);
        head = head->next;
    }
    printf("\n");
}

// Add Two Numbers
struct Node* addTwoNumbers(struct Node* l1, struct Node* l2) {
    struct Node* dummy = createNode(0);
    struct Node* curr = dummy;
    int carry = 0;

    while (l1 || l2 || carry) {
        int sum = carry;

        if (l1) {
            sum += l1->data;
            l1 = l1->next;
        }

        if (l2) {
            sum += l2->data;
            l2 = l2->next;
        }

        carry = sum / 10;
        int digit = sum % 10;

        struct Node* newNode = createNode(digit);
        curr->next = newNode;
        curr = curr->next;
    }

    return dummy->next;
}

int main() {
    // First number: 243 → 3 -> 4 -> 2
    struct Node* l1 = createNode(2);
    l1->next = createNode(4);
    l1->next->next = createNode(3);

    // Second number: 564 → 5 -> 6 -> 4
    struct Node* l2 = createNode(5);
    l2->next = createNode(6);
    l2->next->next = createNode(4);

    printf("l1:\n");
    LinkedListTraversal(l1);

    printf("l2:\n");
    LinkedListTraversal(l2);

    // Sum = 807 → 7 -> 0 -> 8
    struct Node* result = addTwoNumbers(l1, l2);
    printf("Sum:\n");
    LinkedListTraversal(result);

    return 0;
}
