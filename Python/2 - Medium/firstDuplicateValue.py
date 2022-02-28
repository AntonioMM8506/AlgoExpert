def firstDuplicateValue(array):
    res = -1
    distant = len(array)

    for i in range (0, len(array)):
        for j in range(i+1, len(array)):
            if(array[i]==array[j]):
                if(j<distant):
                    distant = j
                    res = array[i]
    
    print(res)
    return res

#End of firstDuplicateValue

if __name__ == '__main__':
    firstDuplicateValue([2, 1, 5, 2, 3, 3, 4])#2
    firstDuplicateValue([3, 1, 3, 1, 1, 4, 4])#3
    firstDuplicateValue([2, 1, 5, 3, 3, 2, 4])#3
    firstDuplicateValue([1])#-1
    firstDuplicateValue([])#-1
