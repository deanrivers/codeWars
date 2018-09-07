// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^22 is 1.

// Note: The function accepts an integer and returns an integer


function squareDigits(num){

	var digit = 0;

	var array = [];

	var answer = "";

	var m = 0;

	num.toString(10).split("").map(function(t){return parseInt(t)});
	var digits = (""+num).split("");

	for (i = 0; i < digits.length; i++){

		var square = digits[i]*digits[i];
		console.log(square);
		array.push(square);
		console.log(array);


	}

	answer = Number(array.join(''));
	console.log(answer);

	return answer;		

}




parse(2112);