from __future__ import print_function

if __name__ == '__main__':
    n = int(input())
    integer_list = map(int, input().split())
    a = []
    for i in integer_list:
        a.append(int(i))
    t = tuple(a)
    print(hash(t))
