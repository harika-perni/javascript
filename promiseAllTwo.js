//even one promise is rejected among array of promises,entire promise will fail
const promise1=Promise.resolve("First promise resolved");
const promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{reject("second promise");},1000);
});
const promise3=450;
const promiseAll=Promise.all([promise1,promise2,promise3]);
promiseAll.then((values)=>{
console.log(promiseAll);})
.catch((error)=>{ console.log("there is some error");});