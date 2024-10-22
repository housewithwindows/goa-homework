#include <stdio.h>

#define IN  1  // Inside a word
#define OUT 0  // Outside a word

int main() {
    int c, nl, nw, nc, state;

    state = OUT;
    nl = nw = nc = 0;  // Initialize line, word, and character count

    while ((c = getchar()) != EOF) {
        ++nc;  // Count every character
        if (c == '\n')
            ++nl;  // Count newlines
        if (c == ' ' || c == '\n' || c == '\t')
            state = OUT;  // Mark the end of a word
        else if (state == OUT) {
            state = IN;  // Mark the beginning of a new word
            ++nw;  // Increment word count
        }
    }
    printf("Lines: %d Words: %d Characters: %d\n", nl, nw, nc);  // Output the result
    return 0;
}

