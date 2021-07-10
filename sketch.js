var database;
var playerCount = 0;
var gameState = 0;
var hasDocked = false;

var spaceShip, iss, spaceship_img, iss_img, spacecraft_img1, spacecraft_img2, spacecraft_img3, spacecraft_img4;


function preload()
{
  spaceship_img = loadImage("images/spacecraft1.png");
  iss_img = loadImage("images/iss.png");
  bg = loadImage("images/spacebg.jpg");
  spacecraft_img1 = loadImage("images/spacecraft2.png");
  spacecraft_img2 = loadImage("images/spacecraft3.png");
  spacecraft_img3 = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(1000,600);
  createSprite(400, 200, 50, 50);

  //y = 300 = x = 230
  
  spaceShip = createSprite(400, 400, 10, 10);
  spaceShip.addImage(spaceship_img);
  spaceShip.scale = 0.2;

  iss = createSprite(300, 200, 10, 10);
  iss.addImage(iss_img);

}

function draw() {
  background(bg);  

  if(!hasDocked)
  {
    if(keyDown(UP_ARROW))
    {
      spaceShip.y-= 5;
      spaceShip.addImage(spacecraft_img1);
    }

    if(keyDown(DOWN_ARROW))
    {
      spaceShip.y+=5;
    }

    if(keyDown(LEFT_ARROW))
    {
      spaceShip.x-=1;
      spaceShip.addImage(spacecraft_img3);
    }

    if(keyDown(RIGHT_ARROW))
    {
      spaceShip.x+=1;
      spaceShip.addImage(spacecraft_img2);
    }
  }

  if(spaceShip.x===230 && spaceShip.y===300)
  {
    hasDocked = true;
    console.log("HAS DOCKED!!")
    textSize(26);
    fill(220);
    text("||SUCCESFULLY DOCKED||", 300, 500)
  }

  console.log(spaceShip.x);
  drawSprites();
}