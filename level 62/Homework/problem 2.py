def equable_triangle(a,b,c):
    p = a + b + c
    pp = p * 0.5
    s = round(pp * ((pp-a)*(pp-b)*(pp-c)))**.5
    return p==s