- A signed integer is a negative integer, 0, or a positive integer.

Unsigned: $[0, 2^n - 1]$ as range, Ex [0, 15]
Signed/Twos Compliment: $[-2^{n-1}, 2^{n-1}-1]$ as range, Ex [-8, 7] 

#### How many bits to represent k values?

$log_{2}k$ bits
 
#### Two's Complement (Representing Signed Binary Numbers)

- Binary addition should work regardless if number is positive or negative

>[!tip] The negative number is the positive number **inverted, plus 1**

##### Computing the complement

1. Extending (if needed) an unsigned binary number by adding one bit as the Most Signficant Bit to indicate its sign (0 -> positive, 1 -> negative)
2. Taking the inverse of the number (1 -> 0, 0-> 1)
3. Then add 1

> We can perform x-y by doing x+(-y) using Two's Complement