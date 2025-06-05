When we are making an approximation using [[Taylor Polynomials]], we need to quantify the absolute errors:

$$|f(x)-P_{n,x_{0}}|$$
Taylor's Theorem gives an expression for the error made using Taylor Polynomial 


### Taylor's Theorem

Let $f$ be $n+1$ differentiable on $[x_{0}, x]$, with $P_{n,x_{0}}(x)$ defined as nth order polynomial. Then $\exists$ c $\in (x_{0}, x)$ such that 
$$f(x)=P_{n,x_{0}}(x)+R_{n}(x)$$
where
	$$R_{n}(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-x_{0})^{n+1}$$
> $R_{n}(x)$ is referred to as the Lagrange Reminder

- This is an existence theorem, c exists but we cannot find it
- This means that if we use [[Taylor Polynomials]] of order $n$, the error or remainder term involves the (n+1) derivative

>[!tip] Since $f$ is $n+1$ differentiable, then $f^{(n+1)}$ is bounded, which can be expressed by the following.

$$|f^{n+1}(x)|\leq K$$
Now looking at the absolute difference:
$$|f(x)-P_{n,x_{0}}(x)|=\mid{\frac{f^{n+1}(c)(x-x_{0})^{n+1}}{(n+1)!}}\mid$$
$$\leq\frac{K}{(n+1)!}|x-x_{0}|^{n+1}$$
$\implies$ upper bound on error in estimate


### Taylor's Inequality 

If $P_{n,x_{0}}$ is used to approximate $f(x)$ on some interval $[x_{0}, x]$, then the error satisfies:
$$|f(x)-P_{n,x_{0}}|\leq\frac{K}{(n+1)!}|x-x_{0}|^{n+1}$$
where $|f^{n+1}(x)|\leq K$ on $[x_{0}, x]$

Check out [[Taylor Series]]
