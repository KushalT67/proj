const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
var balls=[]
 var boats=[]
var boat
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angle = 20
  angleMode(DEGREES)

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);
  
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  rect(ground.position.x, ground.position.y, width * 2, 1);
  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  //cannonBall.display();
  for (let index = 0; index < balls.length; index++) {
    showBalls(balls[index])
  collideboat(index)
  }
  
Boats()
  
}

function keyReleased(){
if(keyCode==DOWN_ARROW)(cannonBall.shoot())
}

function keyPressed(){
  if(keyCode==DOWN_ARROW){
    cannonBall = new CannonBall(cannon.x, cannon.y);
    balls.push(cannonBall)
  }

  }
  function showBalls(ball){
    if(ball){
ball.display()
    }
  }

  function Boats(){
    if (boats.length>0) {
      if (boats[boats.length-1].body.position.x<=width-400) {
        boat= new Boat(width-100,height-50,100,100,-80)
      boats.push(boat)
      }
      
      for (let index = 0; index < boats.length; index++) {
    if (boats[index]) {
      Matter.Body.setVelocity(boats[index].body,{x:-0.5,y:0})
 boats[index].display();
    }
        
      }

    } else {
      boat= new Boat(width-100,height-50,100,100,-80)
      boats.push(boat)
    }
  }

  function collideboat(index){
for (let i = 0; i < boats.length; i++) {
  if (balls[index]!==undefined&&boats[i]!==undefined) {
    var collision=Matter.SAT.collides(balls[index].body,boats[i].body)
    console.log(collision)
    if (collision.collided) {
      boats[i].remove(i)
    }
  }
 
  
}

  }