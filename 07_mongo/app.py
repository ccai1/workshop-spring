'''
Cathy Cai and Shin Bamba -- Team Bambi
SoftDev2 pd6
K#07: Import/Export Bank
2019-03-01
'''

'''
Dataset: Nobel peace prize winners and their research, starting from 1901
http://api.nobelprize.org/v1/prize.json
Imported through json.load, adding the values of the "prize" key to the nobel_prize collection
in the bambi db
'''

import pymongo, urllib.request, json
SERVER_ADDR="206.81.7.95"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.bambi
collection=db.nobel_prize

f = open("prize.json")
data = json.load(f)
collection.insert_many(data["prizes"])

# with urllib.request.urlopen("") as url:
#     data = json.loads(url.read().decode())["prizes"][0]
#     collection.insert_one(data)
def find_subject(subject):
    l = []
    for d in collection.find({"category" : subject}):
        l.append(d)
    return l

def find_year(year):
    l = []
    for d in collection.find({"year" : year}):
        l.append(d)
    return l

def find_surname(surname):
    l = []
    for d in collection.find({"laureates.surname" : surname}):
        l.append(d)
    return l

#
# print("-----------")
# print("test find_subject")
# print(find_subject("physics"))
#
# print("-----------")
# print("test find_year")
# print(find_year("2018"))
# #
# print("-----------")
# print("test find_surname")
# print(find_surname("Curie"))
#
