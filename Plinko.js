class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 5;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
        //Matter.Body.setVelocity(this.body,random(-1,1))
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        stroke("green");
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r*2);
        
        pop();
    }
    

};