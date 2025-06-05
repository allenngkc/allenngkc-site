
### The Chain Rule

Recall the single variable version:

If $y=f(x)$ and $x=g(t)$, then $y=f(g(t))$ and $y'(t)=f'(g(t))g'(t)$

If we interpret y(x) as the temperature of air above Earth's surface and g(t) as the position of a skydiver, then $\frac{dy}{dt}$ represents **the r.o.c of temperature felt by the skydiver**

### The Chain Rule (Multivariable)

There is no 'the chain rule' but instead many different versions which arise from different dependencies of variables'

eg: 
1) $f(x,y)$, where $x=x(t)$ and $y=y(t)$
2) $f(x,y,z)$, where $x=x(s,t), y=y(s,t), z=z(s,t)$
3) $f(x,y), x=x(u,v,w), y=y(u,v,w), u=u(r,s,t), v=v(r,s)$


Suppose we have $f(x,y)$ as the temperature on a 2D plate, and $(x(t), y(t))$ is the position of a particle moving around the plate

![[Pasted image 20250604205057.png|300]]

Question: What is the rate of change of temperature w.r.t time felt by the particle on its path?

Recall the increment form of the linear approximation from [[Linear Approximation]]:

$$\triangle f \approx \frac{\partial f}{\partial x} \triangle x+\frac{\partial f}{\partial y}\triangle y$$
Now, divide all terms by $\triangle t$
$$\frac{\triangle f}{\triangle t}\approx\frac{\partial f}{\partial x}\frac{\triangle x}{\triangle t}+\frac{\partial f}{\partial y}\frac{\triangle y}{\triangle t}$$
and finally take limit as $\triangle t\rightarrow 0$
$$\frac{df}{dt}=\frac{\partial f}{\partial x}\frac{dx}{dt}+\frac{\partial f}{\partial y}\frac{dy}{dt}$$



### Chain of Dependence Diagrams

1. $f(x,y)$, $x=x(t), y=y(t)$

![[Pasted image 20250604210407.png]]

$\frac{df}{dt}=\frac{\partial f}{\partial x}\frac{dx}{dt}+\frac{\partial f}{\partial y}\frac{dy}{dt}$
