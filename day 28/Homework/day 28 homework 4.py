def reverse_words(text):
    singleWord=text.split(' ')
    revWord=[]
    x=0
    while x<len(singleWord):
        revWord.append(singleWord[x][::-1])
        x+=1
    return ' '.join(revWord)