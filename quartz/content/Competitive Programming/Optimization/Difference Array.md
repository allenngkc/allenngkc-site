### Motivation

Given P actions, In each action, add $v_{i}$ to $a[L...R]$ of array a (size N) Find the value of array a.

1. Add 2 to $a[1...3]$ $\implies$ $[0,2,2,2,0,0]$
2. Add 3 to $a[2...5]$ $\implies$ $[0,2,5,5,3,3]$


>[!tip] The native solution is to simulate the operation for each action, but the time complexity would be O(PN)


### 1D Difference Array - Idea

Assume the following actions:
1. add 2 for $a[2]$ to $a[6]$
2. add 3 for $a[4]$ to $a[8]$
3. add 4 for $a[7]$ to $a[7]$
Then we have the following:
$$a[i]=[0,2,2,5,5,5,7,3,0]$$
- Marking the differences as an array d we have the following array d
$$d[i]=[0,+2,0,+3,0,0,+2,-4,-3]$$
- $d[i]=a[i]-a[i-1]$

##### How can we compute value of array a based on array d?

1. Log the addition or subtractions for each query
2. Then we can create our a array by O(n) looping our difference array