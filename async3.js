const { reject } = require("async");

function add(num1,num2)
{
    return new Promise((resolve,reject)=>{
        if(num1!=0 || num2!=0){
            let result=0;
            result=num1+num2;
            resolve(result);
        }
        else{
            reject('numbers are invalid');
        }

    })
}
const value=async()=>{
    try{
        const resOne=await add(0,0);
        console.log(resOne);
    }
    catch(err)
    {
        console.error(err);
    }
}
value();