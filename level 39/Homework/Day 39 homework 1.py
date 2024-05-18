def duplicate_encode(word):
    word = word.lower()
    char_count = {}
    for char in word:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    encoded_string = ""
    for char in word:
        if char_count[char] > 1:
            encoded_string += ")"
        else:
            encoded_string += "("
    return encoded_string