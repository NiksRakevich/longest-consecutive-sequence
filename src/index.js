module.exports = function longestConsecutiveLength(array) {
	let maxCounsLength = 1;
	let objOfConsLen = {};
	if (array.length === 0){
		return 0;
	}
	for (let a = 0, beforeA = array.length; a < beforeA; a++) {
		if (objOfConsLen[array[a]] === undefined) {
			objOfConsLen[array[a] + 1] = 1;
		} else {
			objOfConsLen[array[a] + 1] = objOfConsLen[array[a]] + 1;
			if (objOfConsLen[array[a] + 1] > maxCounsLength) {
				maxCounsLength = objOfConsLen[array[a] + 1];
			}
		}
	}
	return maxCounsLength;
}