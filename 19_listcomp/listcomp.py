'''
Cathy Cai
SoftDev2 pd6
K#19: Ready, Set, Math!
'''

import math

def union(a1, a2):
    return [i for i in a1] + [j for j in a2 if j not in a1]

print(union([1,2,3],[2,3,4]))

def intersection(a1, a2):
    return [i for i in a1 for j in a2 if i==j]

print(intersection([1, 2, 3], [2, 3, 4]))

def difference(a1, a2):
    return [i for i in a1 if i not in a2]

print(difference([1, 2, 3], [2, 3, 4]))

def sdifference(a1, a2):
    return difference(a1 + a2, intersection(a1, a2))

print (sdifference([1, 2, 3], [2, 3, 4]))

def cproduct(a1, a2):
    return [(i, j) for i in a1 for j in a2]

print (cproduct([1, 2, 3], ["red", "blue"]))
