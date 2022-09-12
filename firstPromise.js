var p1=new Promise(function(resolve,reject){
    var result=true;
    if(result){
        resolve ("its true");}
    else{ reject("its not true");}
})
console.log(p1);
p1.then(function(val){ console.log(val);})
.catch(function(val) { console.log(val);})