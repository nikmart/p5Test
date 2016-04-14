var button;
function setup() {
  background(0);
  button = createButton('click me');
  button.position(200, 200);
  button.mousePressed(changeBG);
}

function changeBG() {
  ledON();
  console.log("ledON");
  var val = random(255);
  background(val);
}
