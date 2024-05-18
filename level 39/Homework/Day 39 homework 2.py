import string
def is_pangram(s):
    return set(string.ascii_lowercase).issubset(s.lower())
