// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either
// entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes 
// the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

var integers = [];


function findOutlier(integers){

	
	var integerLength = integers.length;
	var EvenNumberArray = [];
	var OddNumberArray = [];
	var answer = 0;

	for(i=0; i<integerLength; i++){

		//determine whether the current number is even or odd
		if(integers[i]%2==0){

			console.log(integers[i] + " " + "is an even number");
			
			EvenNumberArray.push(integers[i]);


		} else{
			console.log(integers[i] + " " + "is an odd number");
			
			OddNumberArray.push(integers[i]);
		}

		//evaluate the outlier
		//go through loop again and find the either the first odd or even number based on above criteria
		if(EvenNumberArray.length == 1){
			answer = EvenNumberArray[0];
		}

		if(OddNumberArray.length == 1)
			answer = OddNumberArray[0];		

	}
		console.log(EvenNumberArray);
		console.log(OddNumberArray);

		return answer;

}

findOutlier([0,-1,2,-2,6,8,100,500]);



