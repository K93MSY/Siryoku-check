function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  let a=0;
  function draw() {
    if(a%60==0){
        clear()
        background(225);
        fill(255,0,0);
        circle(windowWidth*random(), windowHeight*random(), 40);
    }
    a++;
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }