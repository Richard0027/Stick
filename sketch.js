const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stick1;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    World = engine.world;

    box1 = new Stick(200,300,50,50);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    stick1.display();
    
}