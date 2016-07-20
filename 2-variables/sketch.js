var ancho = 400;
var alto = 400;
var tamX = 100;
var tamY = 100;

function setup() {
createCanvas(ancho,alto);
}

function draw() {
  background(255);
  ellipse(mouseX,mouseY,tamX,tamY);
  
  text("UTESA",mouseX,mouseY)
}