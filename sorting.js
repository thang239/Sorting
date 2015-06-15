function bubbleSort(array) {
	if (array.length <= 1) {
		return array;
	} else {
		var swaps;
		do {
			swaps = 0;
			for (var i = 0; i < array.length; i++) {
				if (array[i] > array[i+1]) {
					swap(array,i,i+1);
					swaps += 1;
				}
			}
		} while (swaps > 0) 
		return array;
	}
}
function swap(array,i,j){
	var first = array[i];
	array[i] = array[j];
	array[j] = first;
	

}
function merge(left, right) {
	var merged = [];
	while (left.length  && right.length ) {
		var toPush = left[0]<right[0]?left.shift():right.shift();
		merged.push(toPush);
	}
	
	return merged.concat(left).concat(right);
}

function halve(arr) {
 	var midPoint = arr.length/2;
 	var right = arr;
 	var left = right.splice(0,midPoint);
 	return [left,right];
}

function mergeSort(array) {
	if(array.length<=1) return array;
	var arr = halve(array);
	// var firstHalf = mergeSort(arr[0]);
	// var secondHalf = mergeSort(arr[1]);
	return merge(mergeSort(arr[0]),mergeSort(arr[1]));
}


// Merge Sort
// 	1. Divide Array of n elements into n arrays of 1 element
// 	2. Merge neighboring arrays
// 	3. Make sure to merge in sorted order
// 	4. Repeat until there's only one array