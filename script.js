const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	// for (let i = 0; i < arr.length; i++) {
	// 	let sum =0;
	// 	for (let j = 0; j <= i; j++) {
	// 		if(arr[j] )

	// 			sum = sum + arr[j];
			
	// 	}
		
	// }


	// let substring = [];
	// let sum = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	sum = sum + arr[i];
	// 	if(sum > n){
	// 		return substring;
	// 		substring = [];
	// 		sum = 0;
	// 	}
	// 	substring = substring.append(arr[i]);
	// }


	let outerArray = [];
let substring = [];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if(sum + arr[i] > n){
        outerArray.push(substring);
        substring = [];
        sum = 0;
    }
    substring.push(arr[i]);
    sum = sum + arr[i];
}
if(substring.length > 0){
    outerArray.push(substring);
}
return outerArray;
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
