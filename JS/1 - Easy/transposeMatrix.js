function transposeMatrix(matrix) {
    let transposedMatrix = []
    let numArrays = matrix.length; //number of elements in transposed array
    let numElements = matrix[0].length; //number of arrays in the transposed matrix
    
    for(let i=0; i<numElements; i++){
        let aux=[];
        for(let j=0; j<numArrays; j++){
            aux.push(matrix[j][i])
        }
        transposedMatrix.push(aux);
    }

    console.log(transposedMatrix);
    return transposedMatrix;

}//End of transposeMatrix


transposeMatrix([[1,2]]); // [1],[2]
transposeMatrix([[1,2], [3,4], [5,6]]); // [1, 3, 5], [2, 4, 6]
transposeMatrix([[1,2,3], [4,5,6], [7,8,9]]); //[1, 4, 7], [2, 5, 8], [3, 6, 9]
