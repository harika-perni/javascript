function Power(num,powerofnum)
{
    if(powerofnum==1)
    return num;
    else
     return num*Power(num,powerofnum-1);
}

//const x=parseInt(prompt("enter your number"));
//const n=parseInt(prompt("enter the power of  number"));
const x=10;
const n=3;
const result=Power(x,n);
console.log(result);