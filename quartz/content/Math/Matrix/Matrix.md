
### Manipulating Matrices

when we want to find if a matrix has zero solutions, 1 or infinitely many solutions. we do Reduced row-echolon form

#### Reduced Echelon Form
$$A=\begin{bmatrix}
1&0&0\\0&1&0\\0&0&1
\end{bmatrix}$$

#### Matrix Determinant

$$
A=\begin{bmatrix}
a&b\\c&d
\end{bmatrix}
$$
$det(A) = ad-bc$, a scalar value

##### Finding the Determinant of a 3x3 Matrix

$$A=\begin{bmatrix}
a_{1}&a_{2}&a_{3}\\b_{1}&b_{2}&b{3}\\c_{1}&c_{2}&c_{3}
\end{bmatrix}$$
$$det(A)=a_{1}\begin{bmatrix}b_{2}&b_{3}\\c_{2}&c_{3}\end{bmatrix}-a_{2}\begin{bmatrix}b_{1}&b_{3}\\c_{1}&c_{3}\end{bmatrix}+a_{3}\begin{bmatrix}b_{1}&b_{2}\\c_{1}&c_{2}\end{bmatrix}$$
>Here the square brackets are determinant of the matrix
>aei + bfg + cdh - afh - bdi - ceg

#### Properties of Determinant

1. $|A|=\frac{1}{A^{-1}}$
2. $|AB|=|BA|=|A||B|$
3. $|cA|=c^n|A|$


#### Inverse Matrix

We know for numbers $x\times \frac{1}{x}=1$, for matrices we have
$$AA^{-1}=I\implies A^{-1}A=I$$
where $I$ = identity matrix

> Some matrix do not have an inverse matrix

