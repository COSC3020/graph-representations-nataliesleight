# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

For runtime complexity:

Creating the adjacency list takes V operations and then created an array within each spot in the array takes another V, making 2V total for the creation of the adjacency list. 

Searching the matrix takes $V^2$ time as there are two for loops that run from 0 to V. For each inner loop an if statement checks if the edge exists, then adds the edge if it does which adds E.

The total runtime complexity is $2V + V^2 + E$ and thus $T(V, E) ∈ Θ(V^2 + E)$ which relies on both the number of vertices and edges. 

Sources: 

I used this site to help me visualize adjacency lists and matrices: https://www.cs.usfca.edu/~galles/visualization/Algorithms.html

I looked in the test code to help decide what data type to use in the adjacency list (whether to use a linked list or 2D array)

I used this link to refresh on how to add new elements to the end of an array: https://www.w3schools.com/jsref/jsref_push.asp 

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.” - Natalie Sleight


## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
