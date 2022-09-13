const promise1= new Promise((resolve,reject)=>
    setTimeout(resolve,4000,["studnets","outing","joy"]));
const promise2=new Promise((resolve,reject)=>
setTimeout(resolve,3000,{hari:{aim:"IAS",Exam:"may2023"}}));
const promiseall=Promise.all([promise1,promise2]);
const promiseallsettled=Promise.allSettled([promise1,promise2]);
promiseall.then((value) => {
    console.log(value);
});
promiseallsettled.then((value) => {
    console.log(value);
});