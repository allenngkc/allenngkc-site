
>[!tip] Definition: A sequence is a list of numbers that goes on indefinitely: $a_{1}, a_{2}, a_{3}...$

Sequences may be defined recursively
$$e.g\;\;a_{1}=1,\;a_{2}=1, \;a_{n}=a_{n-1}+a_{n-2}$$
$$\{1,1,2,3,5,8,13,21,34\}$$
#### Sequence Limits

Some sequences have a limit (appear to approach some finite value) as $n\rightarrow \infty$

$$\{a_{n}\}=(\frac{1}{2})^n\;, \{1,\frac{1}{2}, \frac{1}{4},\frac{1}{8},...\}\rightarrow 0$$
$$\{a_{n}\}=\frac{3(-1)^n}{n}+6,\;\{3,\frac{15}{2}, 5, \frac{27}{5},...\} \rightarrow -1$$
###### What does it mean for a sequence $\{a_{n}\}$**?

- Approaches a finite value without reaching it
- "Converges" - Continuously approaches a value
### Definition of limit of a sequence

- We say that $\{a_{n}\} \rightarrow L\;as\;n\rightarrow \infty$ or equivalently $lim_{n\rightarrow \infty}a_{n}=L$
- If for any $\epsilon > 0$, $\exists K$ such that $|a_{n}-L| < \epsilon$ whenever $n > K$
- **Where K represents the number of terms to reach a error below $\epsilon$, L = limit

In this case, we say $\{a_{n}\}$ converges to $L$, if not, $\{a_{n}\}$ diverges.

#### Visualization

![[Pasted image 20240921135141.png|500]]


>[!tips] For negating $\forall \epsilon, \exists K$, Show that there exists $\epsilon$ for which there does not exist a $K$ 


### Terminology for Sequences

- If $\{a_{n}\}$ is increasing or decreasing, we call $\{a_{n}\}$ **monotonic
- If $\exists$ numbers c and d such that $\forall n=1,2...$ then we call $\{a_{n}\}$ **bounded

#### Monotonic Sequence Theorem

> If $\{a_{n}\}$ is bounded and monotonic, then $\{a_{n}\}$ converges. 