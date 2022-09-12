//const { reject } = require("async");

const x=10;
const y=20;
const promise=new Promise(function(resolve,reject)
{
    if(x==y)
    resolve();
    else reject();
});
promise.then(()=>console.log("both are equal"))
.catch(()=>console.log("they are not equal"));