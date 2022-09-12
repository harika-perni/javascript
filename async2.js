const movies=[{title:"Sita Ramam",hero:"Dulquar"},{title:"Surya",hero:"Surya"}
];
function getMovies()
{
    return new Promise((resolve,reject)=>
    {
         movies.forEach((movies,index)=>
         {
               resolve(movies.title);
         });
    });
}
    const result= async()=>{
        try{
            

        const getResult=await getMovies();
        
        console.log(getResult);
        }
        catch(err)
        {
            console.error(err);
        }
    }
    result();