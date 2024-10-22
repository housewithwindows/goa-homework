#include <stdio.h>

int power(int m, int n) {
    int result = 1;
    for (int i = 0; i < n; i++) {
        result *= m;
    }
    return result;
}

/* Test power function */
int main() {
    int i;
    int z;  // Variable to store power result
    
    for (i = 0; i < 10; ++i) {
        z = power(2, i);  // Store power result in z
        printf("%d %d %d\n", i, z, power(-3, i));
    }
    return 0;
}



