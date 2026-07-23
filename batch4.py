# lis=[1,2,3.14,"Hi",True]
# lis.append("Hello")
# print(lis)

# lis.pop(3)
# print(lis)

# s=set()
# s.add(1)
# s.add(1)
# print(s)

# d={1:"A",2:"B",3:"C"}
# print(d)
# print(d.values())
# print(d.keys())

# for i,j in d.items():
#     print(i,j)

# lis=[1,0,2,3,1,2,4,5,2,3]
# new_l=[0,0,0,0,0,0]
# for i in lis:
#     new_l[i]+=1
# print(new_l)

# lis=[1,0,2,3,1,2,4,5,2,3]
# S=set(lis)
# for i in S:
#     print(i,lis.count(i))

# lis=[1,0,2,3,1,2,4,5,2,3]
# freq={}
# for i in lis:
#     if i in freq:
#         freq[i]+=1
#     else:
#         freq[i]=1
# print(freq)


# from collections import Counter
# lis=[1,0,2,3,1,2,4,5,2,3]
# freq=Counter(lis)
# print(freq)

# lis=[1,2,3]
# from itertools import permutations
# p=list(permutations(lis))
# print(p)

# l=[1,2,3]
# from itertools import combinations
# c=combinations(l,4)
# print(list(c))

# from itertools import combinations
# lis=[1,2,3]
# for i in range(1,4):
#     for j in combinations(lis,i):
        #print(j)

def function1(name):
    print("Hi",name)
function1("Saravanan")

class Class1():
    def __init__(self,i):
        self.i=i
    def function1(self):
        print(self.i)
    def function2(self,j):
        print(j)

obj=Class1(3)
obj.function1()
obj.function2("Hello")

d={"name":"Saravanan",
"age":20,
"salary":10000}

import json
res=json.dumps(d)
print(res)