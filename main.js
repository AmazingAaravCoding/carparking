//Create a reference for canvas 
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
//Give specific height and width to the car image
greencarwidth=75
greencarheight=100
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencarx=5
greencary=200
//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	bgtag=new Image()
    bgtag.onload=uploadBackground
    bgtag.src="parkingLot.jpg"

    greencartag=new Image()
    greencartag.onload=uploadgreencar
    greencartag.src="car2.png"
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(bgtag,0,0,canvas.width,canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greencartag,greencarx,greencary,greencarwidth,greencarheight)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
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
function up(){
	if (greencary>0) {
		greencary-=10
		uploadBackground()
		uploadgreencar()
	}
	}
	function left(){
	if (greencarx>0) {
		greencarx-=10
		uploadBackground()
		uploadgreencar()
	}
	}
	function down(){
	if (greencary<300) {
		greencary+=10
		uploadBackground()
		uploadgreencar()
	}
	}
	function right(){
		if (greencarx<700) {
			greencarx+=10
			uploadBackground()
			uploadgreencar()
		}
	}