### Motivation

- In some simulation problems, some continuous steps can be performed all at once

Ex: Find the date of now + N days

> Instead of iterating over days, we deduct Mi days from N

### Batching Step - Find Cycles

In some simulation problems, we may encounter cycles that are traversed many times causing TLE, like in [[Graphs]]

A directed graph with N nodes, each node has one outgoing edge. We need to go through M edgers starting from node 1, where will we finall be at

- Note that there are a total of N edges with N nodes, meaning that it must have a cycle, if M is large, we could be stuck in a cycle

> We can find out the cycle and "skip" it => impl in [[Graphs]]
> 