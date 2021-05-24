class Paper {
    constructor(x,y){
        var prop = {
            isStatic:false,
            restitution:0.4,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,30,prop);
        this.radius = 30;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        fill("red");
        circle(pos.x,pos.y,this.radius);
        pop();
    }
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-85});
	}
}
