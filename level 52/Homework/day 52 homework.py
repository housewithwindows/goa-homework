def getCount(inputStr):
    list_vowels = ['a', 'e', 'i', 'o', 'u']
    return sum([inputStr.count(vowel) for vowel in list_vowels])