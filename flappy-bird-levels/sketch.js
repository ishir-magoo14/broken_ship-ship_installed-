var obstacles, spaceShip, back;

//preload
function preload() {
background1 = loadImage("background3.png");
spaceShipImg = loadImage("pngfind.com-spaceship-png-transparent-3878988.png");
ob = loadImage("obstacle.png")
}

//setup
function setup() {
createCanvas(600,300) 

spaceShip = createSprite(50,150,50,50);
spaceShip.addImage(spaceShipImg)
spaceShip.scale = 0.05;

obstacle = createSprite(700,350,50,50)
obstacle.addImage(ob)
obstacle.scale = 7;
obstacle.visible = false;
}

//draw
function draw() {
background(182);
background(background1);

if(keyDown("space")){
    spaceShip.velocityY = -10;
}

spaceShip.velocityY = spaceShip.velocityY + 0.8

drawSprites();
}