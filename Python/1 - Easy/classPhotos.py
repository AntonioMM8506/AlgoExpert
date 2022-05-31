
def classPhotos(redShirtHeights, blueShirtHeights):
    res = True
    redShirtHeights.sort()
    blueShirtHeights.sort()
    backRow = redShirtHeights if (max(redShirtHeights) > max(blueShirtHeights)) else blueShirtHeights
    frontRow = blueShirtHeights if (redShirtHeights == backRow) else redShirtHeights

    print('front row: ', frontRow)
    print('back row: ',  backRow)

    for i in range(0, len(redShirtHeights)):
        if(frontRow[i]>=backRow[i]):
            res = False

    print(res)
    return res

if __name__ == '__main__':
    classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]) #true
    classPhotos([6, 9, 2, 4, 5], [5, 8, 1, 3, 4]) #true
    classPhotos([1, 1, 1, 1, 1, 1, 1, 1], [5, 6, 7, 2, 3, 1, 2, 3]) #false
    classPhotos([125], [126]) #true
    classPhotos([19, 2, 4, 6, 2, 3, 1, 1, 4], [21, 5, 4, 4, 4, 4, 4, 4, 4]) #false

