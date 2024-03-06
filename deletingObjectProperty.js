var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

var objectDisplay=function(obj)
{
    if(typeof obj ==='object')
    {
      deleteProperty(obj);
      return obj;
    }
    else
    {
        return "not an object";
    }


}

var deleteProperty=function(obj)
{
      delete obj.rollno;
      return obj;
    
}

let ob=objectDisplay(student);
console.log(ob);