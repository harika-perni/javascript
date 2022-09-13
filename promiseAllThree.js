const promise1=Promise.resolve("First promise resolved");
const promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{reject("second promise");},1000);
});
const promise3=450;
Promise.all([promise1.catch((error)=>error)
    ,promise2.catch((error)=> new Error('there is some error'))
    ,promise3]).then((values)=>{console.log(values[0]),
        console.log(values[1]),
        console.log(values[2]);})
