var scAngle;
function setup() {
  //To make the displayWidth and displayHeight as width and height respectively:-
  createCanvas(displayWidth,displayHeight);
  //Creating variables to store the values from predefined functions in p5.js:-
  hr = hour();
  mn = minute();
  sc = second();
}
function draw() {
  //To change the angle Mode to degrees:-
  angleMode(DEGREES);
  //To change the background colour to MistyRose:-
  background("MistyRose");
  // Scale the value from 0 to 360 using the map function:-
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 60, 0, 360);
  //To draw seconds hand:-
  push();
  rotate(scAngle); //-:To rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(100,0,100,0);
  pop();
  //To draw the sprites that have been created so far:-
  drawSprites();
}