var xpos = 300
var ypos = 400
var xspeed =6
var yspeed =6

//function Preload() {
    //imageMode (CENTER) ;
    //Rights = loadImage("assets/animal.png")
//}

function setup() {
  createCanvas(1000, 900)
  
}

function draw() {
  background(63, 117, 204)
  
  if (keyIsDown(LEFT_ARROW)) {
     xpos -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    xpos += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    ypos -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
     ypos += 5;
  }
  
  
  //bodd
  strokeWeight(0)
  fill(250, 229, 202)
  rect(xpos, ypos, 100, 100)
  
  //fans
  strokeWeight(1)
  stroke(random(0,255))
  fill(89, 63, 63)
  ellipse(xpos - 5, ypos - 5, 60, 60)
  ellipse(xpos - 5, ypos + 95, 60, 60)
  ellipse(xpos + 95, ypos - 5, 60, 60)
  ellipse(xpos + 95, ypos + 95, 60, 60)
  
  //bouncce+
  //if (xpos > 1000 - 130){
      //xspeed = -6  
  //}
  //if (0 > xpos - 30){
      //xspeed = 6
  //}
  //if (ypos > 900 - 130){
     //yspeed = -6
 // } 
  //if (0 > ypos - 30){
      //yspeed = 6
  //}
 //xpos = xpos + xspeed
 //ypos = ypos + yspeed
 noStroke(0)
 textSize(30)
 text('Use the arrow keys', 200,200)
} 


