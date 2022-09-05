let result;
const ps=require("prompt-sync");
const prompt=ps();
const num1=parseFloat(prompt("enter first numbber"));
const num2=parseFloat(prompt("enter second number"));
const operator=prompt("enter operator either +,-,*,\,%");
switch(operator)
{
    case '+':
        result=num1+num2;
        console.log(result);
        break;
        case '-':
        result=num1-num2;
        console.log(result);
        break;
        case '*':
        result=num1*num2;
        console.log(result);
        break;
        case '/':
        result=num1/num2;
        console.log(result);
        break;
        case '%':
        result=num1%num2;
        console.log(result);
        break;
        default:
            console.log("Invalid operator");
            break;

}