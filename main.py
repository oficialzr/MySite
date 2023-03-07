# 1 миллион 2 миллиона

# First
# triangles = []
# for a in range(1, 101):
#     for b in range(1, 101):
#         for c in range(1, 101):
#             if a ** 2 + b ** 2 == c ** 2:
#                 triangles.append((a, b, c))

# for i in triangles:
#     print(f'a = {i[0]}, b = {i[1]}, c = {i[2]}')


# Second
# n = 100000
# num_list = [i for i in range(2, n+1)]
# p = 2
# i = 0
# while i < len(num_list):
#     num_list = list(filter(lambda x: x % p != 0, num_list))
#     try:
#         p = num_list[i]
#         i += 1
#     except:
#         break
# print(num_list)

# Second
# n = 2000000
# lst = []
# deliteli = [2, 3, 5, 7]
# for i in range(2, n+1):
#     flag = True
#     for j in deliteli:
#         if i != j:
#             if i % j == 0:
#                 flag = False
#                 break
#     if flag:
#         lst.append(i)

# print(lst)


k = 3
n = 4

for i in range(1, k+1):
    for j in range(n):

