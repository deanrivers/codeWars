// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

var letterArray = ['a','c','e'];

function missingLetter(letters){
	
//console.log(letters.length);
	
	console.log(letters);
	

	for(i = 0; i < letters.length; i++){

		//a
		if (letters[i] == ('a' || 'A')) {


			if (letters[i+1] !== ('b' || 'B')){

				console.log(letters[i+1]);

				return i+1;

				break;
			}









		}


	}
//console.log('b');

}

missingLetter(letterArray);