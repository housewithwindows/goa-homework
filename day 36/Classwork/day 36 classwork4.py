def remove_url_anchor(url):
    pos = 0
    for i in url:
        if i == '#':
            break
        pos += 1
    # print(url[:pos])
    return url[:pos]