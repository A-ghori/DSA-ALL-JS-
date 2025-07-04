#include <stdio.h>

int main() {
    int nums[] = {2, 7, 11, 15};

    printf("Total bytes: %lu\n", sizeof(nums));
    printf("One int size: %lu\n", sizeof(nums[0]));
    printf("Length of array: %lu\n", sizeof(nums) / sizeof(nums[0]));

    return 0;
} 
