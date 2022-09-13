const { reject } = require("async");
const { resolve } = require("path");
//promise.all() takes array of promises and waits untill each and every promise gets resolved
const promise1=Promise.resolve("First promise resolved");
const promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("second promise");},1000);
});
const promise3=450;
const promiseAll=Promise.all([promise1,promise2,promise3]);
promiseAll.then((values)=>{
console.log(promiseAll);});