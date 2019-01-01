
let x;
let y;
let w;
function setup(){
createCanvas(windowWidth,windowHeight);
background(250);
}

function draw(){
background(255);
	fill(255,0,0);
	let x=windowWidth/2-100;
	let y=0;
	let w=200;
	rect(x,y,w,w);
	if(mouseX>=x && mouseX<=x+w && mouseY>=y && mouseY<=y+w){
		fill(0,255,0);
		rect(x,y,w,w);
		print('I work')
	}
}
