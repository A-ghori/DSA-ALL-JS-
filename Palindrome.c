#include <stdio.h>
#include <stdbool.h>

bool isPalindrome(int x) {
    if (x < 0) return false;

    int original = x;
     int long long reversed = 0;  //LONG LONG FOR IF I WANT TO DECLARE THE  VERY LARGE INTEGER THAT TIME LONG LONG NEEDED ITS A BASIC SYNTAX ;;;;

    while (x > 0) {
        int digit = x % 10;
        reversed = reversed * 10 + digit;
        x = x / 10;
    }

  return (long long) original == reversed ;
}

int main() {
    int num = 121;
    if (isPalindrome(num)) {
        printf("%d is a palindrome.\n", num);
    } else {
        printf("%d is NOT a palindrome.\n", num);
    }
    return 0;
}