const { reject } = require("async");

function positiveOrNegative(num)
{
    return new Promise((resolve,reject)=>{
          if(num>0)
          {
            resolve('Given number is positive');
          }
          else
          {
            reject('given number is negative');
          }
    });
}
const result=async()=>{
    const resOne=await positiveOrNegative(12);
    try{
        console.log(resOne);
    }
    catch(err)
    {
        console.log(err);
    }
}
result();