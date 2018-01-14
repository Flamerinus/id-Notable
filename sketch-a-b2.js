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
var bplus= 1;
var x = 90;
var y = 75;
var result = 1;
function amasb2() {
	
	b = document.getElementById("B").value * 10;
	a = document.getElementById("A").value * 10;
	aplus = Number(a) + x;
	bplus = Number(a) + y;
	result = (a * a)/100 - (2 * a * b)/100 + (b * b)/100;
	
	
	noStroke(0);
	fill(0, 100, 0);
	rect(aplus - b, y, b, a);
	rect(x + 250, 15, 40, 30);
	rect(x, bplus - b, a, b);
		
	//B2 rectangulo
	noFill(0, 50, 222);
	rect(x + 313, 15, 30, 30);
	stroke(0);
	rect(aplus - b, bplus - b, b, b);
	
	//A rojo
	stroke(200, 0, 0);
	noFill(200, 0, 0);
	rect(x, y, a, a);
	rect(x + 208, 15, 30, 30);
	
	stroke(0);
	fill(200, 200, 0);
	
	if(b/10 <10) {
	   rect(x + 295, 405, 40, 30)
	   	
	} else {
		rect(x + 307, 405, 40, 30)
	}
}

function letras() {
	noStroke();
	fill(0);
	textAlign(CENTER);
	//Letras grandes interiores
	textSize(40);
	stroke(200, 0 , 0);
	noFill();
	text("A", x + a / 2, y + a / 2);
	textSize(20);
	text("2", x + 15 + a / 2, y - 15 + a / 2);
	
	fill(0);
	noStroke();
	textSize(40);
	text("B", aplus - b / 2, 15 + bplus - b / 2);
	textSize(20);
	text("2", 15 + aplus - b / 2, bplus - b / 2);
	
	textSize(40);
	text("AB", aplus - b / 2, y + a / 2);
	textSize(40);
	text("AB", x + (a - b) / 2, 15 + bplus - b / 2);
	
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
	text("A", x + a / 2, bplus + 20);
	text("A", aplus + 10, y + a / 2);
	text(Number(a / 10 - b / 10), x + (a - b) / 2, y + 20);
	text(Number(a / 10 - b / 10), x + 11, y + (a - b) / 2);
	
	//text("B", aplus + b / 1 + 10, bplus + b / 2 + 10);
	fill(0, 0, 200);
	text("B", x + 10, bplus - b / 2 + 10);
	fill(200, 0, 0);
	text("B", aplus - b / 2, y + 20);
	fill(0);
	//text("B", aplus + b / 2, bplus + b / 1 + 20);
	
	//Ecuacion
	textAlign(LEFT);
	textSize(20);
	text("(A - B) = (  -  ) x (  -  ) = (A  - 2AB + B )", x, 40);
	//parte de abajo
	text("(A - 2AB + B ) = " + a/10 * a/10 + " - " + ( 2 * a/10 * b/10) + " + " + b/10 * b/10 + " = " + result, x, 430);
	
	text("(A - B) = " + Number(a/10 - b/10), x + 50, 470);
	text(Number(a/10 - b/10) + " = " + Number(a/10 - b/10) * Number(a/10 - b/10) , x + 220, 470);
	fill(200, 200, 0);
	text("===>", x + 165, 470);
	
	
	fill(200, 200, 0);
	text("A",x + 85, 40);
	fill(200, 0, 0);
	text("B",x + 105, 40);
	
	fill(0, 200, 0);
	text("A",x + 149, 40);
	fill(0, 0, 200);
	text("B",x + 169, 40);
	
	fill(0);
	textSize(12);
	text("2",x +57, 27);
	text("2", x + 228, 27);
	text("2", x + 329, 27);
	
	//parte de abajo
	text("2", x + 17, 417);
	text("2", x + 111, 417);
	
	text("2", x + 242, 457);
	
	
	
}