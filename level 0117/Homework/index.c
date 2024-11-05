#include <stdio.h>

int is_increasing(int a, int b) {
    // Check if f(a) >= f(b) when a >= b
    if (a >= b) {
        return (a * a * a) >= (b * b * b);
    }
    return 0;
}

int main() {
    int a, b;
    printf("Enter values for a and b: ");
    scanf("%d %d", &a, &b);

    if (is_increasing(a, b)) {
        printf("The function f(x) = x^3 is increasing for a >= b.\n");
    } else {
        printf("The function f(x) = x^3 is not increasing for the given values.\n");
    }

    return 0;
}
