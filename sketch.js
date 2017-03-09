//Stanford moving box example
//Featre to add: Change face based on odd / even
var movingBox;
var clicks = 0;
function setup() {
  createCanvas(800,800);
  movingBox = createSprite(width/2, height-50, 50, 50);
  movingBox.friction = .95;
  textSize(32);
  textAlign(CENTER);
}

function draw() {
  background(255);
  drawSprites();

  //Display number of clicks
  text(clicks + " clicks",100,50);

if(movingBox.position.y < 0){
text("You Win!\nPress any key to reset.",width/2,height/2);
}

//First way I moved the box
  //movingBox.position.y = height-50-50*clicks;
//First way I added friction
 /* if(movingBox.velocity.y < 0){
      print("slowing down");
      movingBox.addSpeed(.01,90);
  }*/

}

function mousePressed() {
    clicks = clicks + 1;
    //added the conditional statement to make the control more interesting
//    movingBox.addSpeed(1,-90);

  if(movingBox.velocity.y > -2){
          movingBox.addSpeed(1,-90);
      }
}

function keyPressed() {
    clicks = 0;
    movingBox.position.y=  height-50;
    movingBox.velocity.y = 0;
}
