A function is a relation between a set of inputs (domain) and a set of possible outputs (codomain)  
where each input is related to exactly one output.

 ![[Pasted image 20240906222355.png]]

> Note. A function might not hit every element of $Y$, The $image$ of the function $f$ is the elements that are hit by some elements in its domain.

The $image$ of $f: X \rightarrow Y$ can be represented as:
$$f(X)=\{y \in Y:\exists\: x\in X \;with\;f(x)=y\}$$
The symbol $\exists$ is read as "there exists".

For example, consider function $g:\mathbb{N}\leftarrow\mathbb{N}$ defined by g(n) = 2n. The image of $g$, denoted as $g(\mathbb{N})$
is the set $2\mathbb{N}$, which consists of even number {0,2,4}. The function g does not cover all elements in $\mathbb{N}$

##### Image

If $f: X\to Y$ is a function, then $f:X\in Im(f)$ is a surjective function 

$$Im(f)=\{y\in Y:\exists\; x\in X\;f(x)=y\}\subset Y$$
##### Graph

The graph of $f$, denoted $\#f$
$$\#sin=\{(x.sin(x):x\in\mathbb{R}\}$$

## Bijective Mapping

**A function $f:X\rightarrow Y$ is $bijective$ if it is both injective and surjective.** This means every element in the codomain $Y$ is the image of exactly one element in the domain $X$. 

#### Injective Function

A function $f:X\rightarrow Y$ is $injective$ **if there are no shared values.** That means $x_{1}, x_{2}\in X, f(x_{1})=f(x_{2})$ implies $x_{1}=x_{2}$
#### Surjective Function

A function $f:X\rightarrow Y$ is $surjective$ if every element in the codomain $Y$ is the image at least one element in the domain $X$. For every $y\in Y, \exists \; x \in X$ such that3 $f(x)=y$


Check [[Heaviside Function]]


### Inverse Functions and their Relations

$$R\subset X\times Y = \{(x,y): x\in X,y\in Y\}$$
$$R^{-1}=\{(y,x):(x,y)\in R\} \subset Y \times X$$
> If $f$ is a bijection, the inverse function $f^{-1}: A\rightarrow B$ exists.