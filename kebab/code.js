//kebabize a string

//Problem statement

//convert a camel case string into kebab case

//camel = helloWorld
//kebab = hello-world

//TODO
//get camel case string
//determine where the capital letters are
//wherever there is a capital letter...transform that into lower case and put a hyphen right before it
//DONE


// var str = "YYe";



//

// var strings = 'this iS a TeSt 523 Now!';
// var i=0;
// var character='';
// while (i <= strings.length){

//     character = strings.charAt(i);

//     if (!isNaN(character * 1)){
//         console.log('character is numeric');
//     } else { 

//         if (character == character.toUpperCase()) {
//             console.log ('upper case true');
//         }
//         if (character == character.toLowerCase()){
//             console.log ('lower case true');
//         }
//     }

//     i++;
// }


// var str = 'camel!!sHave23Three300Hump-- ()  s!```Hello! World<>?    ';
// function kebabize(str) {
//   str = str.replace(/[\d]/g, "")
//   str = str.charAt(0).toLowerCase() + str.slice(1);
//   return str.replace(/([A-Z])/g, a => "-"+a.toLowerCase());
// }










function kebabize(str){


a = str.replace(/([^a-zA-Z])/g,'');
//a = str.replace(/\W+/g, "");

b = a.replace(/_/g, '');

c = b.replace(/([a-z])([A-Z])/g, '$1-$2');




console.log(c.toLowerCase());




}


kebabize(str);



//var character='';

// for (var i = 0; i < str.length;i++){

//     character = str.charAt(i);

//         if (character == character.toUpperCase()) {
//             console.log ('upper case true');
//         } else {
//             console.log ('lower case true');
//         }

    
// }








// var arr = UpperCaseArray("thisIsTheStringToSplit");

// function UpperCaseArray(input) {
//     var result = input.replace(/([A-Z]+)/g, ",$1").replace(/^,/, "");

//     console.log(result.split[0]);


//     return console.log(result.split(","));
// }


