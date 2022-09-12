const { reject } = require("async");
const { resolve } = require("path");

const array=["hari",{name:"abhi",
                      age:28},"surya","dulquar"];
function nameSearch(name)
{
    return new Promise((resolve,reject)=>
    {
    
    if(array[1].name===name)
    {
     resolve("name has found in the array");
    }
   else{
     reject(" No name has found in the array");
    }
});
}
console.log("====================================================");
const result=async()=>
{
    try{
        const resOne=await nameSearch("abhidfgh");
        console.log(resOne);
    }
    catch(err)
    {
        console.error(err);
    }

}
result();