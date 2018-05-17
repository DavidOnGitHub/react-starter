const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [0, 5, 2, 1], [6, 0, 9, 1], [8, 1, 4, 5]]
const print = (matrix) => matrix.forEach(row => {
	console.log(row.join('  '))
})

const zero = (matrix) => {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 0) {
				matrix[i][j] = 'a'
			}
		}
	}
	
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 'a') {
				for (let k = 0; k < matrix.length; k++) {
					if (matrix[k][j] !== 'a') {
						matrix[k][j] = 0
					}
				}
				for (let k = 0; k < matrix[i].length; k++) {
					if (matrix[i][k] !== 'a') {
						matrix[i][k] = 0
					}
				}
			}
		}
	}
	
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 'a') {
				matrix[i][j] = 0
			}
		}
	}
	
	return matrix
}

print(matrix)
console.log('-----------------')
print(zero(matrix))

