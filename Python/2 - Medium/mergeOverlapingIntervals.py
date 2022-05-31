def mergeOverlappingIntervals(array):
    if(len(array)<2):
        print(array)
        return array

    res = []
    array.sort()
    print(array)
    prev = array[0]

    for i in range(1, len(array)):
        if(prev[1]>= array[i][0]):
            prev = [prev[0], max(prev[1], array[i][1])]
        else:
            res.append(prev)
            prev = array[i]

    res.append(prev)

    print(res)
    return res

if __name__ == '__main__':
    mergeOverlappingIntervals([[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]) #[[1,2], [3,8], [9,10]]
    mergeOverlappingIntervals([[1, 10], [10, 20], [20, 30], [30, 40], [40, 50], [50, 60], [60, 70], [70, 80], [80, 90], [90, 100]]) #[[1,100]]
    mergeOverlappingIntervals([[100, 105], [1, 104]]) #[[1, 105]]
    mergeOverlappingIntervals([[89, 90], [-10, 20], [-50, 0], [70, 90], [90, 91], [90, 95]]) #[[-50, 20], [70, 95]]
    mergeOverlappingIntervals([[20, 21], [22, 23], [0, 1], [3, 4], [23, 24], [25, 27], [5, 6], [7, 19]]) #[[20, 21], [22, 23], [0, 1], [3, 4], [23, 24], [25, 27], [5, 6], [7, 19]]

