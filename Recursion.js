function fact(n)                   //finding factorial of a given number
{
    if(n==0)
    return 1;
    else
        return n*fact(n-1);
}
let n=171;
let result=fact(n);
console.log(result);
