const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var plygonimg;
var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
function preload(){
    plygonimg=loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(600,380,1200,20);
    Stand1= new Ground(390,260,200,10)
    //level two
    block8=new box(330,235,30,40);
    block9=new box(360,235,30,40);
    block10=new box(390,235,30,40);
    block11=new box(420,235,30,40);
    block12=new box(450,235,30,40);
    //level three
    block13=new box(360,195,30,40);
    block14=new box(390,195,30,40);
    block15=new box(420,195,30,40);
    //top
    block16=new box(390,155,30,40);

    //polygon holder with slings
    plygon = Bodies.circle(50,200,20);
    World.add(world,plygon);

   slingShot=new Slingshot(this.plygon,{x:100,y:200});
}
function draw(){
    ground.display()
    background("blue")
    Engine.update(engine)
    Stand1.display()
    //level two
    block8.display()
    block9.display()
   block10.display()
    block11.display()
    block12.display()
    //level three
    block13.display()
    block14.display()
    block15.display()
    //top
    block16.display()
    imageMode(CENTER)
    image(plygonimg,plygon.position.x,plygon.position.y,40,40)
    slingShot.display()

}
 
function mouseDragged(){
    Matter.Body.setPosition(this.plygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly()
}