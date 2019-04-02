if __name__ == '__main__':
    N = int(input())
    a = []
    for _ in range(N):
        q = input().split(" ")
        if q[0] == "insert":
            a.insert(int(q[1]), int(q[2]))
        elif q[0] == "print":
            print(a)
        elif q[0] == "remove":
            a.pop(a.index(int(q[1])))
        elif q[0] == "append":
            a.append(int(q[1]))
        elif q[0] == "sort":
            a.sort()
        elif q[0] == "pop":
            a.pop()
        elif q[0] == "reverse":
            a.reverse()
