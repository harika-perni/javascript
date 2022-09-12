function sumofnums(num)
{
    return new Promise((resolve,reject)=>{
        if(num>0){
            
            let value=0;
            for(let i=1;i<=num;i++)
            {
            value=value+i;
            }
            return resolve(value);
           
        }
        
        else {
            return reject(msg);
        }
    });

    }
sumofnums(50).then((result)=>{console.log("sum is: "+result);})
.catch((err)=>{console.log("number is not greater than zero");});

