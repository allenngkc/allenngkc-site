##### Intro.

For a constant force F, the work done in moving an object a distance $d$ is $W=Fd$

What if the force is not constant?
#### Mass Spring System
By the [[Hooke's Law]], the spring has a restoring force, which is given by: $F=-Kx$

Suppose we have a force F(x) that moves a particle from x=a to x=b, to find the work done. It's given by: $$W=\int_{a}^{b}F(x)dx$$
If we look at our [[Hooke's Law]] again, we can derive the following
$$W=k\int_{a}^{b}xdx$$
$$\implies \frac{k}{2}(b^2-a^2)$$
#### Work Energy Theorem

[[Newton Second Law]]: $m\frac{dv}{dt}=F$, where $\frac{dv}{dt}$ = acceleration

$$\implies m\int_{x_{a}}^{x_{b}}\frac{dv}{dt}dx=\int_{x_{a}}^{x_{b}}F(x)dx$$
$$\implies m\int_{v_{a}}^{v_{b}}vdv$$
So we have $W_{ba}=\frac{m}{2}v_{b}^2-\frac{m}{2}v_{a}^{2}$, this is the kinetic energy formula

#### Potential Functions 

Conservative forces have potential functions

If $U(x)$ is the potential, then $F(x)=\frac{-dU}{dx}$, or we have $U(x)=-\int F(x)dx$

eg. The gravitational potential for a mass m at height x above Earth's surface is $U(x)=mgx$
Thus, $F(x)=-mg$


### Numerical Integration

##### 3 Numerical Methods
1. Midpoint Rule
2. Trapezoid Rule
3. Simpson's Rule

#### Midpoint Rule (Same as Riemann Sum)

Subdivide $[a,b]$ into n equal subintervals of width $h=\frac{b-a}{n}$
Then, $m_{1}=a+\frac{h}{2}, m_{2}=a+\frac{3}{2}h, m_{3}=a_\frac{5}{2}h$ 

##### The midpoint rule for n subintervals is thus:
$$M_{n}=\sum_{i=1}^{n}f(m_{i})h$$
#### Error Bound using the Midpoint Rule

If $|f''(x)| <= K$ on $[a,b]$, then the error satisfies:
$$|\int_{a}^{b}f(x)dx - M_{n}|<= \frac{K(b-a)^3}{24n^2}$$
>[!tip] Key Point: Error is proportional to $\frac{1}{n^2}$


### Trapezoid Rule

Subdivide $[a,b]$, join endpoints using a line

Let $y_{0}=f(x_{0}), y_{1}=f(x_{1})$

On each subinterval, we have a trapezoid: $A_{i} = \frac{1}{2}h(y_{0}+y_{1})$

$$T_{n} = \frac{b-a}{2n}(f_{0}+f_{n}+2(f_1+f_2+f_3+f_4...))$$
#### Error Bound using the Trapezoid Rule

If $|f''(x)| <= K$ on $[a,b]$, then the error satisfies:
$$|\int_{a}^{b}f(x)dx-T_{n}|\leq \frac{k(b-a)^3}{12n^2}$$
- Error prop. to $\frac{1}{n^2}$


>[!tip] Note: K is a number so that $|f''(x)\leq k|$ for  $a \leq x \leq  b$

#### Over Estimation and Under Estimation

$f''(x) < 0$ for $a\leq x \leq b$ $\rightarrow$ under estimate
$f''(x) > 0$ for $a\leq x \leq b\rightarrow$ over estimate 


### Simpson's Rule

Connecting adjacent nodes with a quadratic instead of linear functions.

$$S_{n}=\frac{\triangle x}{3}(y_{0}+4y_{1}+2y_{2}+4y_{3}...+4y_{n-1}+y_{n})$$

#### Error Bound using Simpson's Rule

If $|f^{4}(x)| <= K$ on $[a,b]$, then the error satisfies:

$$|\int_{a}^{b}f(x)dx-S_{n}|\leq\frac{K(b-a)^5}{180n^4}$$

- Error goes as $\frac{1}{n^4}$

>[!tip] Note: K is a number so that $|f^{4}(x)\leq k|$ for  $a \leq x \leq  b$

