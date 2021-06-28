class particle{
    constructor(x,y){
        var options = {
            restitution : 0.5,
            
        }
        this.r = random(5,15);
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ();
        translate(pos.x,pos.y);
        rotate (this.body.angle);
       
        fill (this.color);
        stroke (this.color);
        ellipse(0,0,this.r *2);
        pop();
        
    }
}