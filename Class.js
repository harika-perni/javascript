class bioData{           //Declaring class

    constructor(name,age,education,address)   //initializing an object
    {
        this.name=name;
        this.age=age;
        this.education=education;
        this.address=address;
    }
    //declaring method
    greet()
    {
        console.log("hieee ............"+this.name);
    }
}
   
    //passing object to a variable
    let obj=new bioData("hari",26,"btech","lkp");
    console.log(obj);
    obj.greet();//calling method
    

