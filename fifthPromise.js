const biodata={Harika:{name:"hari",age:25,address:"lkp"},
               Abhi:{name:"abhi",age:28,address:"Hyd"}};
const promise=new Promise(function(resolve,reject)
{
    if(biodata.Harika.address==="lkpsdfg"){ 

   
        resolve();
    }
    else{
   
    reject();
    }

});
promise.then((message)=>{ console.log("biodata found")})
.catch((message)=>{console.log("no biodata found")});