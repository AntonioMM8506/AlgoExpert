def arrayOfProducts(array):
    res = []

    for i in range(0, len(array)):
        mult = 1
        for j in range(0, len(array)):
            if(i != j):
                mult *= array[j]
        res.append(mult)

    print(res)
    return res


if __name__ == '__main__':
    arrayOfProducts([5, 1, 4, 2]) #[8, 40, 10, 20]
    arrayOfProducts([0, 0, 0, 0]) #[0, 0, 0, 0]
    arrayOfProducts([-1, -1, -1, -1]) #[-1, -1, -1, -1]
    arrayOfProducts([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) #[362880, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    arrayOfProducts([-5, 2, -4, 14, -6]) #[672, -1680, 840, -240, 560]
