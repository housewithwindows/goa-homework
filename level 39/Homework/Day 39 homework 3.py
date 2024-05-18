def first_non_repeating_letter(s):    
    s_lower = s.lower()       
    for char in s:        
        if s_lower.count(char.lower()) == 1:   
            return char   
    return ""