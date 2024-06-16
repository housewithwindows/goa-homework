def find_it(arr):
    result = 0
    for num in arr:
        result ^= num
    return result