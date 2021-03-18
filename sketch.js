var fixedRect, ob1, car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(140,140,30,50);
  car.shapeColor = "white";
  car.velocityX = +5;

  wall = createSprite(600,140,10,80);
  wall.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 //if( isTouching(car,wall)){

 // car.velocityX= 0;

//text("zakee",300,300 );
 //ob1.shapeColor = "red";
  //ob2.shapeColor = "red";


// }


 // movingRect.shapeColor = "green";
 //   fixedRect.shapeColor = "green";
 //}


BounceOff(car,wall);

  drawSprites();
}





