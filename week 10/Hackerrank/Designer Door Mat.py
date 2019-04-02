# Enter your code here. Read input from STDIN. Print output to STDOUT

n,m = input().split()
n = int(n)
m = int(m)
c = ".|."
for i in range(int(n/2)):
    print((c*i).rjust(int((m-2)/2),'-')+c+(c*i).ljust(int((m-2)/2),'-'))
print("WELCOME".center(m,'-'))
for i in range(int(n/2)):
    print((c*(int(n/2)-1-i)).rjust(int((m-2)/2),'-')+c+(c*(int(n/2)-1-i)).ljust(int((m-2)/2),'-'))
