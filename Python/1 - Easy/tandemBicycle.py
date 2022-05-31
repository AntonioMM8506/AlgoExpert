def tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest):
    res = 0
    pair = []

    if(fastest):
        redShirtSpeeds.sort()
        blueShirtSpeeds.sort(reverse=True)
    else:
        redShirtSpeeds.sort()
        blueShirtSpeeds.sort()
    
    for i in range(0, len(redShirtSpeeds)):
        pair.append([redShirtSpeeds[i], blueShirtSpeeds[i]])
        print(pair)

        res += max(pair[i][0], pair[i][1])
    
    print(res)
    return res


if __name__ == '__main__':
    tandemBicycle( [5, 5, 3, 9, 2],  [3, 6, 7, 2, 1], True) #32
    tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], False) #25
    tandemBicycle([1, 2, 1, 9, 12, 3, 1, 54, 21, 231, 32, 1], [3, 3, 4, 6, 1, 2, 5, 6, 34, 256, 123, 32], True) #816
    tandemBicycle([1], [5], True) #5
    tandemBicycle([1, 1, 1, 1, 2, 2, 2, 2, 9, 11], [1, 1, 1, 1, 3, 3, 3, 3, 5, 7], False) #36
