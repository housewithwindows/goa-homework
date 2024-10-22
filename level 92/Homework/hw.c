#include <stdio.h>
#include <stdlib.h>

int my_getchar() {
    int ch = getchar();
    if (ch == EOF) {
        if (feof(stdin)) {
            printf("Reached end of file (EOF).\n");
        } else if (ferror(stdin)) {
            printf("Input error occurred.\n");
        }
    }
    return ch;
}

void my_putchar(int ch) {
    if (putchar(ch) == EOF) {
        if (ferror(stdout)) {
            printf("Output error occurred.\n");
        }
    }
}

int main() {
    printf("Enter characters (Ctrl+D to end):\n");
    
    int ch;
    while ((ch = my_getchar()) != EOF) {
        my_putchar(ch); // Print the character back to the output
    }

    // Check for errors after the loop ends
    if (ferror(stdin)) {
        printf("An error occurred while reading input.\n");
    }

    return 0;
}
