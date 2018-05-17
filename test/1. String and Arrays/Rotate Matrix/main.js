const image = [['01', '02', '03', '04'], ['05', '06', '07', '08'], ['09', '10', '11', '12'], ['13', '14', '15', '16']]
const image2 = [['01', '02', '03', '04', '05'], ['06', '07', '08', '09', '10'], ['11', '12', '13', '14', '15'], ['16', '17', '18', '19', '20'], ['21', '22', '23', '24', '25']]
const print = (image) => image.forEach(row => {
	console.log(row.join('  '))
})

const rotate = (image) => {
	const n = image.length - 1
	for (j = 0; j < (n + 1)/2; j++) {
		for (i = j; i < n - j; i++) {
			const temp = image[j][i]
			image[j][i] = image[n-i][j]
			image[n-i][j] = image[n-j][n-i]
			image[n-j][n-i] = image[i][n-j]
			image[i][n-j] = temp
		}
	}
	return image
}

print(image2)
console.log('-----------------')
print(rotate(image2))

