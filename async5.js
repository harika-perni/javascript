const { reject } = require("async");
const { resolve } = require("path");

let promise1=new Promise((resolve,reject)=>{
    resolve('first promise resolved');
},5000)

let promise2=new Promise((resolve,reject)=>{
    resolve('second promise resolved');
},4000)

let promise3=new Promise((resolve,reject)=>{
    resolve('third promise resolved');
},3000)

let promise4=new Promise((resolve,reject)=>{
    resolve('fourth promise resolved');
},2000)

let promise5=new Promise((resolve,reject)=>{
    resolve('fifth promise resolved');
},1000)
async function asyncfun()
{
    let result1= await promise1;
    let result2= await promise2;
    let result3= await promise3;
    let result4= await promise4;
    let result5= await promise5;
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
    console.log(result5);
}
asyncfun();