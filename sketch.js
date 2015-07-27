var ballvel = parseInt(prompt("enter a difficulty level 1-10"));


var ballvelx = ballvel;
var ballvely = ballvel;
var ballx = 100;
var bally = 100;


function setup() {
	createCanvas(windowWidth, 600);
}

function draw() {
	background(51);
	fill('#FFFFFF');
	rect(mouseX, 550, 50, 10);

	ballx += ballvelx;
	bally += ballvely;


	ellipse(ballx, bally, 10, 10);
	text("Ball Y :  " + bally.toString() + "   Ball X : " + ballx.toString(), 100, 100);
	text("Mouse position x : "  + mouseX.toString() + "  Mouse Y : " + mouseY.toString(), 100, 150);

		if(ballx <= windowWidth && ballx > 0) {
			ballvelx = ballvelx;
		}
		else {
			ballvelx = -ballvelx;
		}

		if(bally < 0) {
			ballvely = -ballvely;
		}
		else if( bally <= 541 && bally > 539 && ballx > mouseX && ballx < mouseX+50 ) {
			ballvely = -ballvely;
		}
		
		if(bally > 580) {
			ballvelx = 0;
			ballvely = 0;
			clear();
			fill(51);
			textFont("Avenir");
			textSize(250);
			text("YOU SUCK", 20, 300);
		}
}