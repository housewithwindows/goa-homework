#include <stdio.h>

int main() {
    int c;
    int lastWasBlank = 0;

    while ((c = getchar()) != EOF) {
        if (c != ' ') {
            putchar(c);
            lastWasBlank = 0;
        } else if (!lastWasBlank) {
            putchar(c);
            lastWasBlank = 1;
        }
    }

    return 0;
}
