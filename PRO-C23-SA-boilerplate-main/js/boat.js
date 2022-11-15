class Boat {
    constructor(x, y, width, height, boat_position) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.boat_position=boat_position
      var options={friction:1,density:1,restitution:0.5}
      this.body = Bodies.rectangle(x, y, this.width,this.height, options);
    this.image = loadImage("./assets/BOAT.png");
    World.add(world, this.body);
  }
  remove(index){
    Matter.World.remove(world,boats[index].body)
    delete boats[index]
  }
  display() 
  {
    
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image,pos.x, pos.y, this.width, this.height);
    pop();
  }
}

