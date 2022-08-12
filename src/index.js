
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined ) return []
  for(let i = 0; i < matrix.length; i++) {
    (i % 2) ? matrix[i].reverse() : 0
  }
  return matrix.flat()
}
