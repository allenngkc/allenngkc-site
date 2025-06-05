Generalization of [[Linear Approximation]] to higher order polynomials.

We assume the general $n^{th}$ order polynomial has the form:

$$p(x)=a_{0}+a_{1}(x-x_{0})+a_{2}(x-x_{0})^2+a_{3}(x-x_{0})^3+...+a_{n}(x-x_{0})^n$$
Best polynomial approximation has the following:
- Pass through same point $p(x_{0})=f(x_{0})$
- Same tangent at that point $p'(x_{0})=f'(x_{0})$
- Same concavity at that point $p''(x_{0})=f''(x_{0})$


In general, the $n^{th}$ coefficient is given by:

$$a_{n}=\frac{f^n(x_{0})}{n!}$$
The Taylor polynomial of degree n for f about $x_{0}$ is defined by:
$$P_{n,x_{0}}=\sum_{k=0}^{n}\frac{f^k(x_{0})}{k!}(x-x_{0})^k$$

> Higher n values does not implies a better approximation, only a certain range of x values

Check [[Taylor's Theorem and Inequality]] for determining the error of Taylor Polynomials