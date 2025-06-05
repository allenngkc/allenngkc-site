aka unit step function

$$H(x) = \begin{cases}
1 & x \geq 0,\\
0 & x < 0
\end{cases}
$$
If we multiply a function by the Heaviside:

$$f(x)H(x)=\begin{cases}
f(x)&x\geq0\\
0&x <0
\end{cases}$$
If we take the composition of the Heaviside with some function:
$$H(f(x))=\begin{cases}
1&f(x)\geq0\\
0&f(x)<0
\end{cases}$$
We can applying a translation as well
$$H(x-a)=\begin{cases}
1&x\geq a\\
0&x<a
\end{cases}$$

### On/Off Switch
$$H(x-a)-H(x-b)=\begin{cases}
0&0<a\\
1&a\leq x <b\\
0&x\geq b
\end{cases}$$
> When evaluating the piecewise function, just consider the cases. Refer to [[Case Definition]]