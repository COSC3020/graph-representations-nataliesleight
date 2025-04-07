function convertToAdjList(adjMatrix) {
    var vertexSize = adjMatrix.length;
    var adjList = new Array(vertexSize);

    // put empty array in each slot in array
    for (var i = 0; i < vertexSize; i++) {
        adjList[i] = [];
    }

    // looking through whole matrix
    for (var i = 0; i < vertexSize; i++) {          // looking through first index (incoming vertex)
        for (var j = 0; j < vertexSize; j++) {      // looking through secon index (receiving vertex)
            if (adjMatrix[i][j] != 0) {              // if edge exists 
                adjList[i].push(j);                 // add receiving vertex value to incoming vertex in list
            }
        }
    }

    return adjList;
}
