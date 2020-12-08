let message = ["안녕", "승이야", "생일 축하해", "코로나때문에", "온라인으로 편지를 전해"];
let index = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  fill(255);
  textSize(50);
  text(message[index], 10, height/2);
}

function mouseClicked(){
  index = index +1 ;
}
