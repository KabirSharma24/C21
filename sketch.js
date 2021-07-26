var mrect
var frect
var sprite1,sprite2,sprite3,sprite4
function setup() {
  createCanvas(800,400);
  
  frect = createSprite(400, 200, 80, 50);
   frect.shapeColor="green";
    frect.debug=true;
     mrect = createSprite(200,200,50,30);
      mrect.shapeColor="green";
       mrect.debug=true;
       sprite1 = createSprite(100,100,50,30);
       sprite1.shapeColor="blue";
       sprite2 = createSprite(200,100,50,30);
       sprite2.shapeColor="blue";
       sprite3 = createSprite(300,100,50,30);
       sprite3.shapeColor="blue";
       sprite4 = createSprite(400,100,50,30);
       sprite4.shapeColor="blue";
}

function draw() {
  background("cyan");
   mrect.x=World.mouseX;
    mrect.y=World.mouseY;
    sprite3.velocityX=5;
    sprite2.velocityX=-5
  if(collisionDetection(mrect,sprite1)){
    sprite1.shapeColor="red";
    mrect.shapeColor="red";
  }
  else{
    sprite1.shapeColor="green";
    mrect.shapeColor="green";
  }

      
// bounce(sprite2,sprite3);

    drawSprites();

}



  