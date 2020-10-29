class Box {
    constructor(x,y,width,height){
    var option={
     
    'isStatic' : true 
    }
    this.body = Bodies.rectangle(x, y, width, height, option);   
    this.width = width;
    this.height = height;
    this.visibility=255;
    World.add(world, this.body);
}
display() {
console.log(this.body.speed)
    //if(this.body.speed < 8){
       
        fill("BLUE")

    rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
       /*else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
        }
   



}*/
}