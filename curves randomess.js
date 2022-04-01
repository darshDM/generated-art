let img;
let cnv;
function preload(){
  img = loadImage('assets/1.jpg');
}
function setup() {
  cnv = createCanvas(img.width,img.height)
  let newCanvasX = (windowWidth - img.width)/2
  let newCanvasY = (windowHeight - img.height)/2
  cnv.position(newCanvasX,newCanvasY)
  for(let col = 0;col < img.width; col+=1){
    for(let row = 0;row < img.height;row+=1){
        let c= img.get(col,row)
        push();
        translate(col,row);
        noFill();
        strokeWeight(random(2));
        stroke(color(c));
        curve(col,row,sin(col) * random(6),cos(row) * sin(col) * random(60),0,0,cos(row) *  sin(col)*random(2),cos(row) * sin(col) * random(6));
        pop();
    }
  }
  saveCanvas(cnv, 'myCanvas', 'jpg');
}