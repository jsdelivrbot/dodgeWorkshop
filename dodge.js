var player;
function setup(){
    createCanvas(250,250);
    player = createSprite(width/2,height,50,50);
    
}
function draw(){
    drawBackground(0,100,0);
    drawSprites();
    
}