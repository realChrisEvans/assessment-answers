# Print first 10 Natural numbers.

i = 1
while i <= 10:
    print(i)
    i += 1

# Write a program to calculate sum of number from 1 to n.

s = 0
n = int(input("Enter a number: "))
for i in range(1, n+1):
    s += i
print("Sum of first", n, "natural numbers is:", s)

# Write a program to print multiplication table of a given number.

n = 2
for i in range(1, 11):
    print(n, "*", i, "=", n*i)

# Count the total number of digits in a number.

n = 57830
count = 0
while n > 0:
    n = n // 10
    count += 1
print("Total number of digits in", 57830, "is:", count)

