class paper {
constructor(x,y){
var option={
 'restitution':0.8,
 'friction':1.0,
'density': 4.9
}
this.body=Bodies.circle(x,y,15,option);
this.r=15;
this.img=loadImage("hex.png");
World.add(world,this.body);

    
}
 display() {
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.img,0,0,60,60);
 
pop()
}


}