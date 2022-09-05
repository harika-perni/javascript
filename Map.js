let map=new Map();
map.set("hari","javascript");
map.set("abhi","datascientist");
map.set("surya","java developer");
map.set("dulquar","python");
map.set("dulquar","devops");
map.forEach((v,k) => {
    console.log(k, " :",v);
});
console.log(map.keys());
console.log(map.values());
console.log(map.has("surya"));