var x = 0
 


function setup() {
  createCanvas(800, 600);
  background(255);
  plusButton();
}


function draw() {
  fill(0)
  textSize(39)
  textFont("Times")
  textAlign(CENTER);
  text("HydrateMate",400,75)
  addWater();
  
  waterTrack()
  
}


function addWater () {
  


  function mousePressed() {


    if (mouseX > bX && mouseX < bX + bW &&
        mouseY > bY && mouseY < bY + bH) {
        }
}
}


function waterTrack () {
  rectMode(CENTER);
  fill(255)
  rect(width/2,400,75, 300,13,13,13,13)




  if (x > 0) {
    fill('blue')
    rect(width/2,400,75,x,13,13,13,13)
  }
}


function plusButton () {
  fill(109, 185, 232);
  strokeWeight(1)
  rect(width/2-80,500,160,40,13,13,13,13)
  strokeWeight(2)


  line(width/2-60,710,width/2-60,730)
  line(width/2-70,720,width/2-50,720)
  
  fill(0)
  textSize(25)
  textFont("Times")
  text("Add Water",360,728)
}
