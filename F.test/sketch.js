function setup(){
	createCanvas(windowWidth,windowHeight);
	background(255);
}

function draw(){
background(255);
	let c = [60,-60];
	c = random(c);
	print(c);
	for(i=0; i<2; i++){
		for(let y =round(random(0,windowHeight/2 +75)); y>=0 && y<=windowHeight/2 +75; y+c){
			for(let x =round(random(0,windowWidth/2 +75)); x>=0 && x<=windowWidth/2 +75; x+c){
				rect(x,y);
			}
		}
	}
}
