def count_substring(string, sub_string):
    ans = 0
    for i in range(0, len(string)):
        s = string[i:len(string)]
        if s.startswith(sub_string):
            ans += 1
    return ans


if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()

    count = count_substring(string, sub_string)
    print(count)