if __name__ == '__main__':
    s = input()
    for i in s:
        if i.isalnum():
            print(i.isalnum())
            break
    else:
        print("False")
    for i in s:
        if i.isalpha():
            print(i.isalpha())
            break
    else:
        print("False")
    for i in s:
        if i.isdigit():
            print(i.isdigit())
            break
    else:
        print("False")
    for i in s:
        if i.islower():
            print(i.islower())
            break
    else:
        print("False")
    for i in s:
        if i.isupper():
            print(i.isupper())
            break
    else:
        print("False")


