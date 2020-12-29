var fixedrect,movingrect,rand;



function setup() {

  createCanvas(1200,800);

  fixedrect = createSprite(400, 400, 80, 80);

  fixedrect.setCollider("circle",0,0,160/3);

  fixedrect.shapeColor = "green";

  movingrect = createSprite(600, 400, 80, 80);

  movingrect.shapeColor = "green";

  movingrect.setCollider("circle",0,0,160/3);

}



function draw() {

  background(0); 

  movingrect.y = mouseY;

  movingrect.x = mouseX;

  collide(movingrect,fixedrect);

  drawSprites();
  
}

