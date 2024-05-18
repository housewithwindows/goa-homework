def memesorting(meme): 
    Roma = ['b','u','g']
    Maxim = ['b','o','o','m']
    Danik = ['e','d','i','t','s']
    meme = meme.lower()
    for i in meme:
        if i == Roma[0]:
            Roma.remove(i)
            if not Roma:
                return 'Roma'
        if i == Maxim[0]:
            Maxim.remove(i)
            if not Maxim:
                return 'Maxim'
        if i == Danik[0]:
            Danik.remove(i)
            if not Danik:
                return 'Danik'
    return 'Vlad'