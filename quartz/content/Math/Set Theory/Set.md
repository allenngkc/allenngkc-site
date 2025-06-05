A $set$ is a collection of distinct objects. The objects in a set are called $elements$ or $members$ of the set.

$$A=\{1,2,3\}$$
If $x$ is an element of a set $A$, we write $x\in A$, if $x$ is not an element of $A$, we write $x\notin A$

> For an empty set, we can represent it by $\emptyset$

##### Defining a set
Suppose a set $\{1,2,3,4,5\}$, it can be written as $\{ x \in \mathbb{N} \;|\; x<5\}$, which reads as "the set of all x in $\mathbb{N}$ such that x is less than 5".

### Set Theoretic Operations

For subsets, unions and intersections, there are more in [[Mutually Exclusive Events]], and [[Independent and Dependent Events]]

### Cartesian Product of Sets

Let $A$ and $B$ be two sets. The $direct$ $product$ of $A$ and $B$ is the set of all **ordered pairs** where the first one is a member of $A$ and the second one is a member of $B$.

$$A\times B=\{(a,b):\;a\in A,\; b\in B\}$$ 
>However, Cartesian product of sets is not commutative, that is $A\times B \neq B \times A$

The same idea can be generalized to more than 2 sets.

$$A_{1}\times A_{2} \; \times ...\times A_{n} = \{(r_{1},...,r_{n}):r_{k}\in \mathbb{R}, 1 \leq k \leq n\}$$

### Cardinality of Sets

Consider a set $X$, Its cardinality, denoted $|X|$, signifies the number of elements it contains. 
>**Accounting for unique elements only**

$|\{a,b,c\}| = 3$, $|\emptyset| = 0$, $|{a,a}| = 1$

If two sets $A$ and $B$ (finite or infinite), if there exists a bijective function, we assert that A and B have equal cardinality, $|A|=|B|$, for bijective mapping, see more on [[Functions]]

>[!tip] Suppose two sets, $A$ and $B$
>If the function is surjective, then $|A|\geq |B|$ - Image = Codomain
>If the function is injective, then $|B|\geq |A|$ No shared values/output
### De Morgan's Laws

A $universal$ $set$, denoted by $U$, is a set that contains all the objects or elements under consideration for a particular context.

All other sets in that context are subsets of the universal set. $A\subset U$.
$$\overline{A} = X\;\backslash\; A = \{x\in X :x \notin A\}$$
De Morgan's law connects complement, intersection, and union of sets. There are two De Morgan's laws.

1. $\overline{A\cup B} = \overline{A}\cap \overline{B}$ 
2. $\overline{A\cap B} = \overline{A}\cup \overline{B}$ 

### Countable and Uncountable Sets

The set of prime numbers is $countably$ $infinite$.  The prime set $P$ can be defined as:
$$P=\{p\in \mathbb{N}\;|\;p>1\;and\;for\;all\;d\in \mathbb{N},d\;|\;p\implies d=1\;or\;d=p \}$$
Some $infinite$ sets such as $\mathbb{R}$, are strictly larger than these countably infinite sets. In particular: $|\mathbb{N}| \leq |\mathbb{R}|$ 

> We refer to such a set as $uncountable$ or $uncountably$ $infinite$.
> A set that is either finite or countably infinite is termed $countable$ 

For any finite or infinite sets $A$ and $B$, if $A\to B$ is **injective**. We have $|A|\leq|B|$. According to [[Schroeder-Bernstein Theorem]], if $|A|\leq|B|$ and $|B|\leq |A|$, then $|A|=|B|$.

>[!tip] In other words, if $A\to B$ is **injective** and $B\to A$ is also **injective**. Then $|A|=|B|$, one-to-one correspondence.


