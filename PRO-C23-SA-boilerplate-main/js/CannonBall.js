class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }


  display() 
  {
    
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
shoot(){
  var bangle=cannon.angle-35
  bangle=bangle*(3.14/180)
  var v=p5.Vector.fromAngle(bangle)
  v.mult(0.7)
  Matter.Body.setStatic(this.body,false)
Matter.Body.setVelocity(this.body,{x:v.x*(180/3.14),y:v.y*(180/3.14)})
}
    
  
}
