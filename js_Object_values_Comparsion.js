let Student=function(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
}


Student.prototype.comparison=function(s1,s2)
{
    if(s1.name ==s2.name)
    {
        console.log("same name");
    }
}



let s1=new Student("aditya",25,"male");
let s2=new Student("aditya",25,"male");

comparison(s1,s2)
