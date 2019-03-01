'''
Cathy Cai and Mohammed Jamil
SoftDev2 pd6
K #06 -- Yummy Mongo Py
2019-03-01
'''

import pymongo
SERVER_ADDR="206.81.7.95"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.admin
collection=db.restaurants

def find_borough(borough):
    l = []
    for d in collection.find({"borough" : borough}):
        l.append(d)
    return l

def find_zip(zipcode):
    l = []
    for d in collection.find({"address.zipcode" : zipcode}):
        l.append(d)
    return l

def find_zipgrade(zipcode, grade):
    l = []
    for d in collection.find({"address.zipcode" : zipcode, "grades.0.grade" : grade}):
        l.append(d)
    return l

def find_zipscore(zipcode, score):
    l = []
    for d in collection.find({"address.zipcode" : zipcode, "grades.0.score" : {'$lt': score}}):
        l.append(d)
    return l

def find_boroughgrade(borough, grade):
    l = []
    for d in collection.find({"borough" : borough, "grades.0.grade" : grade}):
        l.append(d)
    return l

print("-----------")
print("test find_borough:")
print(find_borough("Manhattan"))
print("-----------")
print("testing find_zip:")
print(find_zip("10282"))
print("-----------")
print("testing find_zipgrade:")
print(find_zipgrade("10282", "A"))
print("-----------")
print("testing find_zipscore:")
print(find_zipscore("10282", 5))
print("-----------")
print("testing find_boroughgrade:")
print(find_boroughgrade("Brooklyn", "B"))
