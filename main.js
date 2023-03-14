canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_X = 20;
greencar_Y = 250;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = backgroundImage;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadGreenCar;
	greencar_imgTag.src = greencarImage;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)

}

function uploadGreenCar() {
	ctx.drawImage(greencar_imgTag, greencar_X, greencar_Y, greencar_width, greencar_height);


}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (greencar_Y >= 0) {
		greencar_Y = greencar_Y - 10;
		uploadBackground();
		uploadGreenCar();
	}
}

function down() {
	if (greencar_Y <= 350) {
		greencar_Y = greencar_Y + 10;
		uploadBackground();
		uploadGreenCar();
	}
}

function left() {
	if (greencar_X >= 0) {
		greencar_X = greencar_X - 10;
		uploadBackground();
		uploadGreenCar();
	}
}

function right() {
	if (greencar_X <= 750) {
		greencar_X = greencar_X + 10;
		uploadBackground();
		uploadGreenCar();
	}
}
