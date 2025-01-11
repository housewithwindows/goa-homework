#include <stdio.h>



int main()
{
    int b[] = {1, 2, 3, 5, 5, 6, 7, 8, 9, 5};
    int v = 5;
    // register size_t i = 0;
    size_t i = 0;

    while (v != b[i]) 
    {
        if(v == b[i+1])
        {
            i++;
            break;
        }
        i = i + 2;
    }
        
    if(i == 9)
    {
         printf ( "Value not found.\n" );
         return 1 ;

    }
    
    printf ( "Found value in place %lu.\n" , i );
    return 0 ;
     
}