function setup() {
  createCanvas(2*windowWidth, 2*windowHeight);
  background(random(150,250),random(45,65),random(220,244));
}
function draw() {
//   scale(5.0);
//   scale(0.20);
  if (frameCount % 30 == 0){
   background(random(150,250),random(45,65),random(150,250));

  }
  if (frameCount % 2 == 0){
  gamePath();
 wheresMyMouse();
}
 }

function gamePath(){
  noFill();
  strokeWeight(4);
  push();
    translate(0,windowHeight);
      beginShape();
        vertex(0,3*windowHeight/4);
        vertex(windowWidth/2,3*windowHeight/4);
        vertex(windowWidth/2,windowHeight);
      endShape();
      beginShape();
        vertex(3*windowWidth/4,windowHeight);
        vertex(3*windowWidth/4,3*windowHeight/4);
        vertex(15*windowWidth/16,3*windowHeight/4);
        vertex(windowWidth,5*windowHeight/8);
      endShape();
      beginShape();
        vertex(windowWidth,9*windowHeight/16);
        vertex(15*windowWidth/16,11*windowHeight/16);
        vertex(3*windowWidth/4,11*windowHeight/16);
        vertex(3*windowWidth/4,windowHeight/2);
        vertex(7*windowWidth/8,windowHeight/2);
        vertex(13*windowWidth/16,9*windowHeight/32);
        vertex(5*windowWidth/8,9*windowHeight/32);
        vertex(5*windowWidth/8,windowHeight/8);
        vertex(11*windowWidth/16,0);
      endShape();
  pop();
}
 function wheresMyMouse(){
push();
translate(0,windowHeight);
  strokeWeight(1);
  fill(255);
  rect(3*windowWidth/4+30,50,300,100);
  fill(0);
  scale(5.0);
  text(mouseX +',' + mouseY,3*windowWidth/20+10,24);
  scale(0.2);
  pop();

}
