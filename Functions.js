const { Console } = require("console");

function add(num1,num2)
{
    return num1+num2;
}
function EvenorOdd(num)
{
    if(num%2==0)
    {
        return "even";
    }
    return "odd";
}

let result,num1;
result=add(4,5);   //add function calling
console.log(result);

let result2=EvenorOdd(45);//evenorodd function calling
console.log(result2);


//sub function calling using arrow method
let sub=(num1,num2)=>num1-num2;

let result3=sub(98,20);


console.log(result3);

