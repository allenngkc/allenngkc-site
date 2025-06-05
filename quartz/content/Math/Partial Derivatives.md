Derivatives measure rate of change, for single variable functions, this is the slop of the tangent to the curve

For a function $f:\mathbb{R}^2\rightarrow\mathbb{R}$, which is visualized by the surface $z=f(x,y)$, [[Multivariable Functions]] we want to know how the height changes with respect to any of the independent variables, **by assuming all other variables constant**

Notation:
$$\frac{\partial f}{\partial x}$$
- $\partial$ symbol is read "partial with respect to" or simply "di"

Example:
$$f(x,y) = xy^2\implies \frac{\partial f}{\partial x}=y^2,\frac{\partial f}{\partial y}=2xy$$

### Second Order Partial Derivatives

$\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}$ both depend on both x and y in general. How many second partials are their? $\implies$ 4 second partials

$$\frac{\partial}{\partial x}(\frac{\partial f}{\partial x}) =\frac{\partial ^2f}{\partial x^2},\frac{\partial}{\partial y}(\frac{\partial f}{\partial y})=\frac{\partial ^2 f}{\partial y^2}...$$

### Clairoat's Theorem

If $f_{xy}$ and $f_{yx}$ are continuous at $(a,b)$, then

$$f_{xy}(a,b)=f_{yx}(a,b)$$
### Class $C^k$

If $f:\mathbb{R}^n \rightarrow \mathbb{R}$ has continuous partials up to order k, then we say f is of class $C^k$, or simply $f\in C^k$ 