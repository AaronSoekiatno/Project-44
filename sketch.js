var player, barn;
var playerImg, barnImg;

function preload(){
    playerImg = loadImage("player.png");
    bg = loadImage("bg.webp");
    barnImg = loadImage("Barn.png");
}

function setup(){
   createCanvas(600,600);
    
    player = createSprite(150,300,10,10);
    player.addImage(playerImg);

    barn = createSprite(550,150,10,10);
    barn.addImage(barnImg);

}

function draw(){
    background(bg);        
    
    if(keyDown("w")){
        player.y = player.y-2;
    }

    if(keyDown("a")){
        player.x = player.x-2;
    }

    if(keyDown("d")){
        player.x = player.x+2;
    }

    if(keyDown("s")){
        player.y = player.y+2;
    }

    drawSprites();
}   
