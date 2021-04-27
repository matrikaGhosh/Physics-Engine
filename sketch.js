const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10
var pendulum, bob;

var gameState = "onSling";

function setup() {
  var canvas = createCanvas(1200, 400)
  engine = Engine.create;
  world = engine.world;

  ground = new Ground(600, height, 1200, 20)

  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  box3 = new Box(810, 350);
  box4 = new Box(810, 260, 300, PI / 2);
  box5 = new Box(700, 240, 70, 70);
  box6 = new Box(920, 240, 70, 70);
  box7 = new Box(810, 220);
  box8 = new Box(810, 160, 70, 70);
  box9 = new Box(760, 120, 150, PI / 7);
  box10 = new Box(870, 120, 150, -PI / 7);

  pendulum = new Pendulum(bob.body, { x: 200, y: 50 });

}
function draw() {
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  function mouseDragged() {
    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
  }
  function mouseReleased() {
    pendulum.fly();
    gameState = "launched";

  }
  function keyPressed() {
    if (keyCode === 32) {
      pendulum.attach(bob.body)
      bob.trajectory = []
      Matter.Body.setPosition(bird.body, { x: 200, y: 50 })
    }
  }
}