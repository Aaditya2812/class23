class Ground{

    constructor(x,y,w,h)
    {
        var grOpt={
            isStatic:true
        }
this.ground=Bodies.rectangle(x,y,w,h,grOpt);
this.width=w,
this.height=h,
World.add(world,this.ground)
    }
    
display(){
    var pos=this.ground.position;
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);
}

}