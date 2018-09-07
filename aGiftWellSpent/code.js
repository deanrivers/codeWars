// Story
// You got a gift card for your local store. It has some credit you can use to buy things, but it may be used only for up to two items, and any credit you don't use is lost. You want something for a friend and yourself. Therefore, you want to buy two items which add up the entire gift card value.




// Task
// You will get the value of the gift card c and a finite list of item values. You should return a pair of indices that correspond to values that add up to c:

//****************************SOLUTION******************************

//take in an intger (c) and array (listOfItems) as arguments
//reorder the array so that it is in order from smallest to greatest. This ensures that returned array is the lowest possible values.
//use a for loop to evaluate each integer in the array. If the number at index is less than c...add it to next number in the array...if the sum is greater than c...drop the added number and move onto the next number in the array and so on...
//if no number combo works from the first starting point... move the starting point to the next number in the array and repeat.
//if still no cases work...return null


//for the passed in array...
//start with the first number...if it is less than integer then continue
//add the first number to the next number...
//if this is equal to c then stop else add first number to second number and so on.
//if none are equal to c then move the first number to the next item in the array and repeat this process.
//current number plus next number






var firstNumber = 0;
var secondNumber = 0;
//var c = 0;
var listOfItems = [];

function buy(c,listOfItems){
console.log(c);



//sort the array
sortedList = listOfItems.sort((function(a, b){return a-b}));
console.log(sortedList);




//first test


	for(i = 0; i < sortedList.length; i++){

		if (sortedList[i] < c){

			firstNumber = sortedList[i];
			secondNumber = sortedList[i+1];
			sum = firstNumber + secondNumber;
			//console.log(sum);

			if (sum === c){
				console.log(sum);

				break;
			} else{
				secondNumber = sortedList[i+2];
				sum = firstNumber + secondNumber;

			} else{
				secondNumber = sortedList[i+3];
				sum = firstNumber + secondNumber;

			}
			





		} else {
			console.log("haha");
		}

	}







}

buy(0,[12,1,5]);