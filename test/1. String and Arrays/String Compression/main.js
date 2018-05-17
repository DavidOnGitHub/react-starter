
function compressString(str) {
	let letter = str.charAt(0), count = 0;
	let result = new Array(), resultIndex = 0;
	
	for (let i = 1; i < str.length; i++) {
		if (letter === str.charAt(i)) {
			count ++;
		} else {
			resultIndex = addLetterNCount(result, resultIndex, letter, count);
			letter = str.charAt(i);
			count = 1;
		}
	}
	addLetterNCount(result, resultIndex, letter, count);
	
	return result.length >= str.length ? str : result.join('');
};

function addLetterNCount(result, resultIndex, letter, count) {
	try {
		result[resultIndex++] = letter;
		const countStr = count.toString();
		for (j = 0; j < countStr.length; j++) {
			result[resultIndex++] = countStr.charAt(j);
		}
	} catch (e) {
		console.log(e);
	}
	return resultIndex;
}

console.log(compressString('aabbcddee'));
