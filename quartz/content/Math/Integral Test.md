Revisit [[Series]]

If $f$ is positive, continuous, decreasing on $[1, \infty]$

Then $\sum_{n=1}^{\infty}a_n$ is convergent $\iff$ $\int_1^{\infty}f(x)dx$ is convergent

##### If $\int_{1}^{\infty}f(x)dx$ is convergent - area under curve > area within rectangles
$$\sum_{n=2}^{\infty}a_{n}<\int_{1}^{\infty}f(x)dx$$
##### If $\int_{1}^{\infty}f(x)dx$ is divergent - area within rectangles > area under curve
$$\sum_{n=1}^{\infty}a_{n}>\int_{1}^{\infty}f(x)dx$$
### Error Estimate with the Integral Test

$$R_{n}=s-s_{n}=\sum_{k=1}^{\infty}a_{k}-\sum_{k=1}^{n}a_{k}=\sum_{k=n+1}^{\infty}a_{k}$$
  
which implies that:

$$\sum_{k=n+1}^{\infty}a_{k}<\int_{n}^{\infty}f(x)dx$$
$$R_{n}<\int_{n}^{\infty}f(x)dx$$
upper bound on error
