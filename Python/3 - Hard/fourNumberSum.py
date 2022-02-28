def fourNumberSum(array, targetSum):
    sum = 0
    res = []

    for i in range(0, len(array)):
        for j in range (i+1, len(array)):
            for k in range (j+1, len(array)):
                for l in range (k+1, len(array)):
                    sum = array[i] + array[j] + array[k] + array[l]
                    if (sum == targetSum):
                        res.append([array[i], array[j], array[k], array[l]])

    print(res)
    return res

if __name__ == '__main__':
    fourNumberSum([7, 6, 4, -1, 1, 2], 16)
    fourNumberSum([-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4)
    fourNumberSum([-10, -3, -5, 2, 15, -7, 28, -6, 12, 8, 11, 5], 20)

#py -u "path"