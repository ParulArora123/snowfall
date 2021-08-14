class Snowflakes{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.5
        }
        this.body=Bodies.rectangle(x,y,50,50,options)
       
        this.image=loadImage("snow4.webp")
        World.add(world,this.body)
        
    }
    display(){
        var pos = this.body.position
        
        image(this.image,pos.x,pos.y);
            
            }
          
       
}