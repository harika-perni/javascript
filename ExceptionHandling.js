let num1=24,num2=0,result;
try {
    
    if(num2==0)
         consollle.log("Divide by zero error");
         else
         {

            result=num1/num2;
             console.log(result);
         }
} catch (e) {
    console.log("error is ......"+e);
    
}
finally
{
    console.log("code always executes regardless of exceptions");
}

