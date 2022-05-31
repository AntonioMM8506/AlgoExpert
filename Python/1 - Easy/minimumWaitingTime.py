def minimumWaitingTime(queries):
    res = 0
    array = queries
    array.sort()
    aux = []

    if(len(array)>1):
        for i in range(0, len(array)-1):
            aux.append(sum(array[:i+1]))
        res = sum(aux)
    
    print(res)
    return res

if __name__ == '__main__':
    minimumWaitingTime([3, 2, 1, 2, 6]) #17
    minimumWaitingTime([6]) #0
    minimumWaitingTime([4, 3, 1, 1, 3, 2, 1, 8]) #45
    minimumWaitingTime([8, 9]) #8
    minimumWaitingTime([1, 1, 1, 4, 5, 6, 8, 1, 1, 2, 1]) #81
