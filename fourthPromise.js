function greater(num1,num2)
{
    return new Promise((resolve,reject)=>
    {
      if(num1>num2)
           resolve();
        
        else
        reject();
        
    });
}
 greater(1009,244).then((result)=>{ console.log('num1 is greater than num2')})
.catch((result2)=>{console.log("num2 is greater than num1")});
 

