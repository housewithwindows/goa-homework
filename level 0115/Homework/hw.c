#include <stdio.h>
#include <math.h>

// Define the function f(x) = x^(2n+1)
double f(double x, int n) {
    return pow(x, 2 * n + 1);
}

int main() {
    int n = 2; // You can change n to any positive integer
    double x1 = -10.0; // Starting point
    double x2 = x1 + 1.0; // Next point to compare
    int is_increasing = 1; // Flag to check if the function is increasing

    for (int i = 0; i < 20; i++) { // Test over a range of 20 values
        if (f(x1, n) >= f(x2, n)) {
            is_increasing = 0; // Not increasing if f(x1) >= f(x2)
            break;
        }
        x1 = x2;
        x2 = x1 + 1.0; // Increment to the next value
    }

    if (is_increasing) {
        printf("The function f(x) = x^(2n+1) is increasing for n = %d\n", n);
    } else {
        printf("The function f(x) = x^(2n+1) is NOT increasing for n = %d\n", n);
    }

    return 0;
}
