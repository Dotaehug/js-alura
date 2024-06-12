function setup() {
    createCanvas(400, 400);
    background("white");
  }
  
  function draw() {
    stroke("rgb(46,46,224)");
    fill("rgb(23,224,23)");
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 50, 50);
    }
  }
  