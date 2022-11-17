canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_X = 75;
greencar_Y = 355;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)

}

function uploadGreenCar() {
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);
	
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y =greencar_y - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_y <=350)
	{
		greencar_y =greencar_y+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greencar_x >=0)
	{
		greencar_x =greencar_x - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greencar_x <=750)
	{
		greencar_x =greencar_x + 10;
		uploadBackground();
		uploadgreencar();
	}
}
