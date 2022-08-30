let firstNum=10;
let secondNum=20;
let thirdNum="thirty";
let result= firstNum===secondNum; //checks equal value and equal type
console.log(result);
console.log(firstNum<secondNum);
console.log(secondNum>firstNum);
console.log(firstNum==thirdNum);//checks equal value
let result2=firstNum%2===0?"even":"odd" ;   //ternary operator
console.log(result2);
//bitwise operators
let result3=5<<1;  //left shift
console.log(result3);
let result4=result3>>1;  //right shift
console.log(result4);
let result5 =2&1;     //sets to 1 if both bits are equal to 1
console.log(result5);
let result6=1|5;      //sets to 1 if any of one of two bits is 1
console.log(result6);
let result7=~2;       //inverts all the bits
console.log(result7); 
let result8=10^5;
console.log(result8);  // XOR OPERATION------sets to 1 only if one of two bits is 1
//logical operators
let x=18,y=56,z=78;
let result9=x>y&&x<z;
console.log(result9);
let result10=x>y ||x<z;
console.log(result10);
let result11 =!result10;
console.log(result11);

