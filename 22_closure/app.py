'''
in python, a fxn is a first-class citizen

to create a closure:
    *define nested fxn
    *nested fxn must refer to var defined in enclosing fxn
    *return nested fxn

ex:
def outer(x):
    def contains(l):
        return x in l
    return contains

>> contains_15([1, 2, 3, 4, 5])
>> False

def outer():
    x = "foo"
    def inner():
        x = "bar"
    inner()
    return x

print(outer())

def outer():
    x = "foo"
    def inner():
        nonlocal x
        x = "bar"
    inner()
    return x
print(outer())

a simple use case: creating a counter apparatus

'''

def repeat(str):
    def tog(num):
        return str * num
    return tog

r1 = repeat("hello")
r2 = repeat("goodbye")

print(r1(2))
print(r2(2))
print(repeat('cool')(3))

def make_counter():
    x = 0
    def count(i=None):
        nonlocal x
        if not i:
            x = x + 1
        return x
    return count

crt1 = make_counter()
print(crt1())
print(crt1())
print(crt1())
crt2 = make_counter()
print(crt2())
print(crt2())
print(crt1())
print(crt2())

print(crt1("cur"))
print(crt1("cur"))
print(crt2("cur"))
print(crt2("cur"))
