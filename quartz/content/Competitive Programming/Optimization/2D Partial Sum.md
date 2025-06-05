#### Motivation

Given an array a with n rows and m columns and q queries, in each query, you need to find the sum of elements from $(Sr, Sc)$ to $(Er, Ec)$

#### Native Solution

For each require query, we can just loop the required array and sum up the numbers, the [[Time Complexity]] of this would be O(nmq)

#### Idea

![[Pasted image 20250526131600.png|350]]

Given that we have area of all rectangles with top-left corner (1,1), how can we find the area of the magenta rectangle?

![[Pasted image 20250526131744.png|400]]

#### Precomputing the area of each rectangle touching (1,1)

$$c[i][j] = a[i][j]+c[i-1][j]+c[i][j-1]-c[i-1][j-1]$$

![[Pasted image 20250526131916.png|400]]

The time complexity for this approach is O(nm) precomputation and O(1) query


Example Problem: https://leetcode.com/problems/range-sum-query-2d-immutable/

### Implementation

- When initializing the 2d prefix sum matrix, we can do `ps.assign(n+1, vector<int>(m+1, 0));`, This allows easier handling of the (1,1) cell

![[Pasted image 20250527170019.png|200]]

```
class NumMatrix {

    vector<vector<int>> ps;

public:

    NumMatrix(vector<vector<int>>& matrix) {

        int n = matrix.size(), m = matrix[0].size();

        ps.assign(n + 1, vector<int>(m + 1, 0));

        for (auto i = 1; i <= n; ++i) {

            for(auto j = 1; j <= m; ++j) {

                ps[i][j] = matrix[i-1][j-1] + ps[i-1][j] + ps[i][j-1] - ps[i-1][j-1];

            }

        }

    }

};
```

