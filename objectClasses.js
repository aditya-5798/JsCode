let Cylinder=function(diameter,height)
{
    this.height=height;
    this.diameter=diameter;
}

Cylinder.prototype.volume=function()
{
    let radius=this.diameter/2;

    let vol=this.height*Math.PI*radius*radius;
    return vol;
}

let v1=new Cylinder(52,25);

console.log(v1.volume());