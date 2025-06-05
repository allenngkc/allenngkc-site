#### Definition

The linearization of a function $f$ about $a$ is the function $L$ defined by
$$L(x)=f(a)+f'(a)(x-a)$$


![[Pasted image 20241016215514.png|400]]


For [[Tangent Plane]], for a function $f(x,y)$ we define the linearization $L_{(a,b)}$ of $f$ at $(a,b)$ by:

$$L_{(a,b)}(x,y)=f(a,b)+\frac{\partial f}{\partial x}(a,b)(x-a)+\frac{\partial f}{\partial y}(a,b)(y-b)$$
We call the approximation:
	$$f(x,y)\approx L_{(a,b)}(x,y)$$

The linear approximation: $f(x,y)$ at $(a,b)$

![[Pasted image 20250531184625.png|450]]

#### Increment form of Linear Approximation

From above,

$$f(x,y)\approx f(a,b)+f_{x}(a,b)(x-a)+f_{y}(a,b)(y-b)$$

By writing $\triangle f = f(x,y)-f(a,b)$, $\triangle x=x-a$, $\triangle y-b$:

$$\implies \triangle f \approx f_{x}\triangle x + f_y \triangle y$$
