### Motivation

Count the number of occurrence of some numbers in array a $(a[i]<=10^9)$ whereas N (size of a) $<= 100000$

#### Native Solutions

1. Using a counting array, but we cannot create a counting array of $[1..10^9]$
2. For each $a[i]$, loop through a to count number of occurrences, O(N^2) gives TLE


### Discretization - Idea

Discretization is a technique that converts values into integers, while maintaining their relative order
Ex: 7654321, 123456, 934602, 123456789 $\rightarrow$ 3, 1, 2, 4

- Put the values into an array, sort the array
- For each value in the original array, find its rank using binary search

#### Solution to our problem

We can perform discretization and map the numbers to their rank
A counting array can be built with size = number of unique numbers
During a query, we can use value's rank to access the counting array to modify/retrieve it