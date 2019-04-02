if __name__ == '__main__':
    students = {}
    ans = []
    fm = 100000000
    sm = 100000000
    for _ in range(int(input())):
        name = input()
        score = float(input())
        if score < fm:
            sm = fm
            fm = score
        elif score < sm and score != fm:
            sm = score
        students[name] = score
    for name in students:
        if students[name] == sm:
            ans.append(name)
    ans.sort()
    for i in ans:
        print(i)