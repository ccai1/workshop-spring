'''
Cathy Cai and Shin Bamba -- Team Bambi
SoftDev2 pd6
K#07: Import/Export Bank
2019-03-01
'''

'''
Dataset: Nobel peace prize winners and their research, starting from 1901
http://api.nobelprize.org/v1/prize.json
Imported directly through mongodb, adding the link to the nobel_peace_prize collection
in the bambi db
'''

import pymongo, urllib.request, json
SERVER_ADDR="206.81.7.95"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.bambi
collection=db.nobel_peace_prize

# with urllib.request.urlopen("http://api.nobelprize.org/v1/prize.json") as url:
#     data = json.loads(url.read().decode())
#     # print(data)

def find_subject(subject):
    l = []
    for d in collection.find({"prizes.category" : subject}):
        l.append(d)
    return l

def find_year(year):
    l = []
    for d in collection.find({"prizes.year" : year}):
        l.append(d)
    return l

def find_surname(surname):
    l = []
    for d in collection.find({"prizes.laureates.surname" : surname}):
        l.append(d)
    return l
#
print("-----------")
print("test find_subject")
print(find_subject("chemistry"))

print("-----------")
print("test find_year")
print(find_year("2018"))

print("-----------")
print("test find_surnamer")
print(find_surname("Curie"))
