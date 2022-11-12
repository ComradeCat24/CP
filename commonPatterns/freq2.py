def getMinimumCost(parcels, k):

    # Write your code here
    rem = k - len(parcels)
    parcels.sort()
    ans, cur = 0, 1
    i = 0

    while i < len(parcels) and rem:
        if cur == parcels[i]:
            i += 1
        else:
            ans += cur
            rem -= 1
            cur += 1

            while rem > 0:
                ans += cur
                cur += 1
                rem -= 1
    return ans


print(getMinimumCost([6, 5, 4, 1, 3], 7))
