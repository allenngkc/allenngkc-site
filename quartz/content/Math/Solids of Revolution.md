
![[Pasted image 20250516001146.png|600]]

Divide into subintervals of width x zoom in on subinterval $[x_{i-1}, x_{i}]$

We evaluate and view it as a (thin) cylinder:

height = $\triangle x$, area = $A(x_{i})$

The volume of the solid on $[x_{i-1}, x_{i}]$ is:
$$V_{i}\approx A(x_{i})\triangle x$$
$$\implies V \approx \sum_{i=1}^{n}A(x_{i})$$
$$\implies V=\int_{a}^{b}A(x)dx$$
### Disk Method

$$\pi\int_{a}^{b}R(x)^2 dx$$
$R(x)$ = distance between the function and the axis of rotation

![[Pasted image 20250516004535.png|300]]

The area of the cross-section is $A(x)=\pi(f(x))^2$, which means

#### Disk Method Formula
$$V=\pi\int_{a}^{a}(f(x))^2dx$$
### Washer Method

![[Pasted image 20250516011259.png|600]]

$\implies A(x) = \pi(f(x))^2-\pi(g(x))^2$

#### Washer Method Formula
$$V = \pi\int_{a}^{b}[(f(x))^2-(g(x))^2]$$

### Cylindrical Shell

![[Pasted image 20250516015834.png|600]]

$$V=\int_{a}^{b}2\pi x(f(x)-g(x))dx$$
>[!tip] Note that we can always modify the thickness, height, length etc depending on the **offset** of the rotation

### Integrating on y - Horizontal Strips


![[Pasted image 20250517155550.png|650]]

$$\implies V=\pi\int_{0}^{4}(4-y)dy$$
Instead, if we decided to integrate on x, we would have shells

$$V=2\pi\int_{0}^{2}x(4-x^2)dx$$
#### Summary - Using Horizontal Strips (Integrating over y)

1. Rotations about y axis: disk / washer
2. Rotations about x axis: shells

### Arc Length

![[Pasted image 20250517155908.png|650]]


Thus, the infinitesimal arc length element $\triangle s$ satisfies:
$$\triangle s^2 \approx(\triangle x)^2+(\triangle y)^2$$
$$\implies \triangle s \approx \sqrt{(\triangle x)^2+(\triangle y)^2}$$
$$\implies \triangle s \approx \sqrt{1+(\frac{\triangle y}{\triangle x})^2}\triangle x$$
Let $\triangle s_{i}$ be the $i^{th}$ element, so that the arc length is:
$$s\approx\sum_{i=1}^{n}\sqrt{1+(\frac{\triangle y}{\triangle x})^2}\triangle x$$
Take the limit and convert it to a [[Improper Integrals]],

### The Arc Length Formula

$$s=\int_{a}^{b}\sqrt{1+(\frac{dy}{dx})^2}dx$$

### Volume Integrals - Summary

| Axis of Rotation | Integrate on x | Integrate on y |
| ---------------- | -------------- | -------------- |
| x-axis           | Disk / Washer  | Shells         |
| y-axis           | Shells         | Disk / Washer  |

### Surface Area

![[Pasted image 20250517162030.png|600]]

The surface area of the band is thus:
$$ds\approx 2\pi f(x) dx$$
Using what we know about arc length element ds:
$$ds\approx 2\pi f(x)\sqrt{1+(f'(x))^2}dx$$
### The Surface Area Formula
$$S=2\pi \int_{a}^{b}f(x)\sqrt{1+(f'(x))^2}dx$$

![[Pasted image 20250517162326.png|600]]

Surface area element $ds\approx 2\pi x ds$
$$\implies S=2\pi\int_{a}^{b}x\sqrt{1+(f'(x))^2}dx$$

### Summary - Surface Area Formulas

| Rotation About |                              |
| -------------- | ---------------------------- |
| **x axis**     | $S=2\pi \int_{a}^{b}\|y\|ds$ |
| **y axis**     | $S=2\pi \int_{a}^{b}\|x\|ds$ |

| Integrating on x     | $ds=\sqrt{1+(f'(x))^2}dx$ |
| -------------------- | ------------------------- |
| **Integrating on y** | $ds=\sqrt{1+(g'(y))^2}dy$ |

- There are a total of 4 possibilities if you combine all of them