#include <stdio.h>

int main() {
    int c;  // Variable to hold each character from input

    while ((c = getchar()) != EOF) {  // Read characters until End of File
        if (c == ' ' || c == '\t' || c == '\n') {
            putchar('\n');  // If a space, tab, or newline is encountered, print a new line
        } else {
            putchar(c);  // Otherwise, print the character
        }
    }

    return 0;
}


