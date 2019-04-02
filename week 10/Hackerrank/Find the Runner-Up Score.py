if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    fm = -100
    sm = -100
    for i in arr:
        if i > fm:
            sm = fm
            fm = i
        elif i > sm and i != fm:
            sm = i
    print(sm)