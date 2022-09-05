const date=new Date();
let array=["harika","abhi","sai","ram",{hero:"dulquar",movie:"SitaRamam",releaseDate:date.getDate()},65,function review()
{
    
   console.log("superhit");
}];

//console.log(array[4].hero);
//console.log(array[4].releaseDate);
array[6]();  //calling the function 
array.push("sita");
array.push("vijay");//appends new elements to the end of an array
array.pop();       //removes the last element of the array
array.shift();      //removes the first element of the array
array.unshift("anitha");    //appends new elements to the start of an array
//console.log("the length of the array is:"+array.length);//to know the length of the array
console.log(array.splice(4));   //removes the elements from that index
console.log(array.splice(2,2,56));//removes the elements from an array,also adds some elements in their place
for (let n of array)
{
    console.log(n);
}
console.log(array);

//console.log(array[4]);//to get the value of an array at  that index