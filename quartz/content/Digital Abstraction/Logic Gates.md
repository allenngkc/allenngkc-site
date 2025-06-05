### Logic Gate: NOT Gate

![[Pasted image 20250523233210.png|100]]
![[Pasted image 20250521173844.png|300]]

#### Circuit Formula: $Y=\overline{A}$

### Logic Gate: NAND Gate

![[Pasted image 20250523233244.png|150]]
![[Pasted image 20250521225550.png|250]]

- P1 and P2 are in parallel - only one needs to be ON to pull up the output to 1
- N1 and N2 are in series - both need to be ON to pull down the output to 0

![[Pasted image 20250521225655.png|350]]

>[!tip] We can build the main logic gates using only NAND gates (or only NOR gates)


### Logic Gate: OR Gate

- Circuit Formula: $Y=A+B$

![[Pasted image 20250523233314.png|150]]

### Logic Gate: NOR Gate

![[Pasted image 20250523233348.png|150]]

- NOT-OR, both A and B need to be 0 for Y = 1
- Circuit Formula: $\overline{A+B}$

### Logic Gate: XOR Gate

![[Pasted image 20250523233416.png]]

- Exclusive OR gate, Y = 1 if the inputs are 1 and 0
- Circuit Formula: $Y=A-$

### Logic Gate: XNOR

![[Pasted image 20250523233450.png|150]]

- Not exclusive OR gate
- Both need to be 0 or both 1 for Y = 1 

### Logic Gate: Buffer Gate

![[Pasted image 20250523233510.png|150]]

-  The opposite of a NOT gate

##### Circuit Formula - $Y=A$ (stack 2 NOT gates)

- Buffer gate is used to amplify a weak signal, like a redstone repeater