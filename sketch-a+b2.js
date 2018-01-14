function setup() {
	frameRate(30);
	var canvas = createCanvas(480, 480);
	canvas.parent("centro");
	
}

function draw() {
	background(110, 110, 110);
	amasb2();
	letras();
	


}

var a = 1;
var b = 1;
var aplus= 1;
var x = 90;
var y = 75;
var result = 1;
function amasb2() {
	
	b = document.getElementById("B").value * 10;
	a = document.getElementById("A").value * 10;
	aplus = Number(a) + x;
	bplus = Number(a) + y;
	result = (a * a)/100 + (2 * a * b)/100 + (b * b)/100;
	fill(200, 0, 0);
	rect(x, y, a, a);
	rect(x + 210, 15, 30, 30);
	fill(0, 200, 0);
	rect(aplus, y, b, a);
	rect(x + 250, 15, 50, 30);
	rect(x, bplus, a, b);
	fill(0, 50, 222);
	rect(x + 313, 15, 30, 30);
	rect(aplus, bplus, b, b);
	
	fill(200, 200, 0);
	
	if(b/10 <10) {
	   rect(x + 305, 405, 40, 30)
	   	
	} else {
		rect(x + 315, 405, 40, 30)
	}
}

function letras() {
	
	fill(0);
	textAlign(CENTER);
	//Letras grandes interiores
	textSize(40);
	text("A", x + a / 2, y + a / 2);
	textSize(20);
	text("2", x + 15 + a / 2, y - 15 + a / 2);
	
	textSize(40);
	text("B", aplus + b / 2, 15 + bplus + b / 2);
	textSize(20);
	text("2", 15 + aplus + b / 2, bplus + b / 2);
	
	textSize(40);
	text("AB", aplus + b / 2, y + a / 2);
	textSize(40);
	text("AB", x + a / 2, 15 + bplus + b / 2);
	
	//Valores de a y b
	textSize(20);
	fill(0, 206, 209);
	text("A= " + a / 10, 30, 470);
	text("B= " + b / 10, 450, 470);
	
	//Letras pequeñas exteriores
	textSize(20);
	fill(200, 200, 0);
	text("A", x + a / 2, y - 2);
	fill(0, 200, 0);
	text("A", x - 10, y + a / 2);
	fill(0);
	text("A", x + a / 2, bplus + b / 1 + 20);
	text("A", aplus + b / 1 + 10, y + a / 2);
	
	
	text("B", aplus + b / 1 + 10, bplus + b / 2 + 10);
	fill(0, 0, 200);
	text("B", x - 10, bplus + b / 2 + 10);
	fill(200, 0, 0);
	text("B", aplus + b / 2, y - 2);
	fill(0);
	text("B", aplus + b / 2, bplus + b / 1 + 20);
	
	//Ecuacion
	textAlign(LEFT);
	textSize(20);
	text("(A+B) = (  +  ) x (  +  ) = (A + 2AB + B )", x, 40);
	//parte de abajo
	text("(A + 2AB + B ) = " + a/10 * a/10 +  " + " + 2* a/10 * b/10 + " + " + b/10 * b/10 + " = " + result, x, 430);
	
	text("(A + B) = " + Number(a/10 + b/10), x + 50, 470);
	text(Number(a/10 + b/10) + " = " + Number(a/10 + b/10) * Number(a/10 + b/10) , x + 220, 470);
	fill(200, 200, 0);
	text("===>", x + 165, 470);
	
	
	fill(200, 200, 0);
	text("A",x + 80, 40);
	fill(200, 0, 0);
	text("B",x + 103, 40);
	
	fill(0, 200, 0);
	text("A",x + 149, 40);
	fill(0, 0, 200);
	text("B",x + 172, 40);
	
	fill(0);
	textSize(12);
	text("2",x +51, 27);
	text("2", x + 230, 27);
	text("2", x + 329, 27);
	
	//parte de abajo
	text("2", x + 17, 417);
	text("2", x + 116, 417);
	
	text("2", x + 242, 457);
	
	
	
}