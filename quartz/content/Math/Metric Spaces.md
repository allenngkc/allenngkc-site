We know that on a number line. For $x, y\in \mathbb{R}$,
$$d(x,y)=|x-y|$$
In higher dimensions:

#### Euclidean Distance ($L_{2}$ distance)

For two points ($x_{1}, y_{1}$) and ($x_{2}, y_{2}$) in $\mathbb{R^2}$
$$d((x_{1}, y_{2}), (x_{2}, y_{2})) = \sqrt{(x_{1}-x_{2})^2+(y_{1}-y_{2})^2}$$
#### Manhattan Distance ($L_{1}$ distance)
$$L_{1}((x_{1}, y_{2}), (x_{2}, y_{2}))=|x_{1}-x_{2}|+|y_{1}-y_{2}|$$

#### Chebyshev Distance ($L_{\infty}$ Distance)
$$L_{\infty}((x_{1}, y_{1}), (x_{2}, y_{2})) =max
\{|x_{1}-x_{2}|, |y_{1}-y_{2}|\}$$


For example: Suppose two points: $p=(x_{1}, x_{2}, x_{3}, x_{4})$ and $q=(y_{1}, y_{2}, y_{3}, y_{4})$ in $\mathbb{R^4}$
$$L_{1}(p,q)=\sum_{k=1}^4=|x_{k}-y_{k}|$$

#### Properties of a Metric Space
$$d:X\times X\rightarrow \mathbb{R^+}$$
1. $d(x,y)=d(y,x)\;\;\forall x,y\in X$ (Symmetry)
2. $d(x,y)=0$ if and only if $x=y$ (Definiteness)
3. $d(x,y)+d(y,z)\geq d(x,z)$ (Triangle Inequality)