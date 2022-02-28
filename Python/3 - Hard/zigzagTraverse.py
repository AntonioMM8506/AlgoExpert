def zigzagTraverse(array):
    if(len(array)==0 or len(array[0]) == 0):
        return []

    row = len(array)
    col = len(array[0])
    index = 0
    resLength = row*col
    x = 0
    y = 0
    sum = 0
    isEven = False
    res = []

    while(index < resLength):
        res.append(array[x][y])
        index += 1
        sum = x+y
        isEven = True if sum%2==0 else False

        if(isEven):
            if(y==0 or x==row-1):
                if(x==row-1):
                    y+=1
                else:
                    x+=1
            else:
                x+=1
                y-=1
        else:
            if(x==0 or y==col-1):
                if(y==col-1):
                    x+=1
                else:
                    y+=1
            else:
                y+=1
                x-=1
    
    #print(res)
    return res
#End of zigzagTraverse


if __name__ == '__main__':
    zigzagTraverse([[1, 3, 4, 10], [2, 5, 9, 11], [6, 8, 12, 15], [7, 13, 14, 16]])
    #[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    zigzagTraverse([[1, 2, 3, 4, 5]])
    #[1,2,3,4,5]

    zigzagTraverse([[1, 3, 4, 10, 11], [2, 5, 9, 12, 20], [6, 8, 13, 19, 21], [7, 14, 18, 22, 27], [15, 17, 23, 26, 28], [16, 24, 25, 29, 30]])
    #[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

#py -u "path"
