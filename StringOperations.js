let firstName="Harika";
let lastName="Perni";
let fullName= firstName+lastName;
let text="    hello people! how are you doing   ";
let num=100;
let padded=num.toString();
console.log("fullName  is "+fullName);     //string concatenation
console.log(firstName.concat(" ",lastName));

console.log(firstName.slice(1,4));         //to get slice of a string
console.log(fullName.substring(2,7));     //to get substring
console.log(text.replace("hello","Hi"));
console.log(text.trim());    //trimming the spaces all over the sentence
console.log(text.trimStart());//trimming the spaces at the start
console.log(firstName.padStart(13,"PERNI"));   //padding string at the starting
console.log(padded.padStart(5,0));
console.log(firstName.charAt(0));  //getting the character at 0
console.log(text.split(" "));  //split on spaces



