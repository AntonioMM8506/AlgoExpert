def getNthFib(n):
    if(n==1):
        return 0
    elif (n==2):
        return 1
    else:
        return getNthFib(n-1) + getNthFib(n-2)

#End of getNthFib

if __name__ == '__main__':
    print(getNthFib(6))#5
    print(getNthFib(7))#8
    print(getNthFib(1))#0
    print(getNthFib(11))#55
    print(getNthFib(18))#1597
