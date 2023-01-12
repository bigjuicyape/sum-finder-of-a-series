let c = document.getElementById('canvas');
let ctx = c.getContext('2d');
let height = 600
let width = 1030
let mouse = {};



function mousemoveHandler(event) {
let rect = c.getBoundingClientRect();
mouse.x = event.clientX - rect.left;
mouse.y = event.clientY - rect.top;
  }
c.addEventListener("mousedown", mousedownHandler);
c.addEventListener("mouseup", mouseupHandler);
c.addEventListener("mousemove", mousemoveHandler);

function keydownHandler(event) {
  input[event.key.toLowerCase()] = true;
}

function keyupHandler(event) {
  input[event.key.toLowerCase()] = false;
}

function mousedownHandler(event) {
  mouse.down = true;
}

function mouseupHandler(event) {
  mouse.down = false;
}

function mousemoveHandler(event) {
  let rect = c.getBoundingClientRect();

  mouse.x = event.clientX - rect.left;
  mouse.y = event.clientY - rect.top;
}


ctx.fillRect(0, 0, width, height);




let mousestartx = 0
let mousestarty = 0

function createline(){
if(mouse.down){
  mousestartx = mouse.x;
  mousestarty = mouse.y;
}
if(!mouse.down){
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(mousestartx, mousestarty);
  ctx.lineTo(mouse.x, mouse.y);
  ctx.lineWidth = 2;
  ctx.stroke();
  if(mouse.down){
  new line(mousestartx, mousestarty, mouse.x, mouse.y)
  }
}

}
class line {
  constructor(linex , liney , endx, endy){
   this.x = linex 
   this.y = liney 
   this.endx = endx
   this.endy = endy
  }


  draw(){ 
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(this.linex, this.liney);
    ctx.lineTo(endx, endy);
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

function loop() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
// draw(line)
// ctx.strokeRect(0, 0, mouse.x, mouse.y)
createline()

requestAnimationFrame(loop)
}
loop()
