let hari={
    name:"Harika",
    age:25,
    occupation:"software trainee",
    address:{
        village:"lakshmipuram",
        pincode:521131,
        city:"vijayawada"
}
}
delete hari.occupation;
/*console.log(hari);
console.log(hari.address.village);
console.log(hari.mobileno);
console.log(hari.address?.doorno);*/   //optional chaining
//using forin loop
console.log(hari["name"]);
for(let key in hari)
{
    console.log(key,hari[key]);
   
}



