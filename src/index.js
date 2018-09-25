module.exports = function longestConsecutiveLength(array) {
	let maxCount = 0;
	for (let a = 0, beforeA = array.length; a < beforeA; a++) {
		let elem = array[a]; 
		let count = 0; 
		while (~array.indexOf(elem)) { 
			count++; 
			elem++; 
		}
		if (count > maxCount){
			maxCount = count;
		} 
	} 
	return maxCount;
}
