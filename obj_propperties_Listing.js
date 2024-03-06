var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
let studt="sadds";
let objectKeys=function(obj)
{
    
   let  keys=[];
   let type=typeof obj;
   console.log(type);
    if(type==='object')
    {
        for(let key in obj)
        {
            keys.push(key);
        }
        return keys;

    }
    else
    {
        return "not a object";

    }
    
}

let a=objectKeys(studt);
console.log(a);
let aa=objectKeys(student);
console.log(aa);

