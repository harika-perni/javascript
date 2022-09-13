const { reject } = require("async");
const { resolve } = require("path");

function sumofnums(num)
{
    return new Promise((resolve,reject)=>{
    if(num>0){
        let result=0;
        for(let i=1;i<=num;i++){
            result=result+i;
        }
        return resolve(result);
    }
    else{
        reject("given number is not valid");
    }
    
    }
)}
const result1=sumofnums(5).then((val1)=>{console.log("sum of 5 natural numbers is:"+val1)});
const result2=sumofnums(10).then((val2)=>{console.log("sum of 10 natural numbers is:"+val2)});
const result3=sumofnums(20).then((val3)=>{console.log("sum of 20 natural numbers is:"+val3)});
const promiseall=Promise.all([result1,result2,result3]);
promiseall.then((value) => {
    console.log(value);
}).catch((error)=>{ console.log("error in the input")});
const promiseallsettled=Promise.allSettled([result1,result2,result3]);

promiseallsettled.then((value) => {
    console.log(value);
});