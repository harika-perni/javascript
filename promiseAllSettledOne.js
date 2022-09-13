const { reject } = require("async");
const { resolve } = require("path");
const promise2=new Promise((resolve,reject)=>
setTimeout(resolve,3000,"Harika"));
const promise3=new Promise((resolve,reject)=>
setTimeout(resolve,2000,"Abhiram"));
const promise4=new Promise((resolve,reject)=>
setTimeout(resolve,1000,"Surya"));
const promise1=Promise.reject("rejected ");
const promiseall=Promise.all([promise1,promise2,promise3,promise4]);
promiseall.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
});
const promiseallsettled=Promise.allSettled([promise1,promise2,promise3,promise4]);
promiseallsettled.then((value) => {
    console.log(value);
});