Determine the area under the curve from $x=1$ to $x=t$ for (i) $f(x)=\frac{1}{x}$, (ii) $f(x)=\frac{1}{x^2}$

#### For $\frac{1}{x}$

$A(t)=\int_{1}^{t}\frac{1}{x}dx$
      $= \ln t-\ln1$
      $= \ln t$
      
As $t\rightarrow \infty, \ln t \rightarrow \infty$, which means area blows up to infinity

#### For $\frac{1}{x^2}$

$A(t)=\int_{1}^{t}\frac{1}{x^2}dx$
      $= 1-\frac{1}{t}$

As $t\rightarrow \infty$, $\frac{1}{t}\rightarrow 0$, which means area stays finite
    
    
>[!tip] Recall that $\sum_{k=1}^{\infty} \frac{1}{k}$ diverges, $\sum_{k=1}^{\infty}\frac{1}{k^2}$ converges

#### Definition

> If f is continous on $[a, \infty]$, then the [[Improper    Integrals]] $\lim_{t\rightarrow \infty} \int_{a}^{t}f(x)dx$ is defined by:

$$\int_{a}^{\infty}f(x)dx=\lim_{t\rightarrow \infty}\int_{a}^{t}f(x)dx$$
- If the limit exist, we say the integral converges (if not, it diverges)

### Type 1 & Type 2 Improper Integrals

##### Type 1 - Unbounded Domain

- $\int_{1}^{\infty}f(x)dx$

##### Type 2 - Discontinuous Function

- $\int_{a}^{b}f(x)dx$

###### If f is continuous on $[a,b]$, except at $x=c\in[a,b]$, then

$$\int_{a}^{b}f(x)dx=\lim_{t\rightarrow c^{-}}\int_{a}^{t}f(x)dx+\lim_{u\rightarrow c^{+}} \int_{u}^{t}f(x)dx$$
- If limit exists, integral converges
#### P-Integrals

$\int_{a}^{\infty}\frac{1}{x^p}dx$ - Converges if and only if $p > 1$ ----- Type 1

$\int_{0}^{a}\frac{1}{x^p} dx$ - Converges if and only if $p < 1$ ----- Type 2 


![[Pasted image 20250513223226.png|500]]

#### Comparison Theorem for Integrals

Let $-\infty \leq a \lt b \leq \infty$, with $f, g$ continuous on $[a,b]$, and $0 \leq f(x) \leq g(x)$ on $[a,b]$.

1) If $\int_{a}^{b}g(x)dx$ converges, then $\int_{a}^{b}g(x)dx$ converges
2) If $\int_{a}^{b}f(x)dx$ diverges. then $\int_{a}^{b}g(x)dx$ diverges

- This is similar to Comparison Test in [[Convergence Test]]
- 



