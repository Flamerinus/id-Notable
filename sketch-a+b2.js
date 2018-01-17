"use strict"
function setup() {
	frameRate(10);
	var canvas = createCanvas(canvwidth, canvheight);
	canvas.parent("centro");
	abcol=color("#407026");
	botabcol=color("#f9bd03");
	a2col=color("#e34a06");
	b2col=color("#31cce8");
	atopcol=color("#f9bd03");
	aleftcol=color("#407026");
  btopcol=color("#e34a06");
  bleftcol=color("#31cce8");
	initial(1);
  }

function draw() {
	background("#999683");
	amasb2();

}
const canvwidth = 800;
const canvheight = 415;
var a;
var b;
var aplus;
var bplus;
var aplusb;
var aminusb;
var x;
var y;
var resultaplusb;
var resultaminusb;
var script;
var descriptaplusb2 = `<td>
(A + B)<sup>2</sup> = (<span style="color:#f9bd03">A</span> + <span style="color:#e34a06">B</span>) x (<span style="color:#407026">A</span> + <span style="color:#31cce8">B</span>) =
</td>
<td style="background-color:#e34a06">
A<sup>2</sup>
</td>
<td>
+
</td>
<td style="background-color:#407026">
2AB
</td>
<td>
	+
</td>
<td style="background-color:#31cce8">
B<sup>2</sup>
</td>`;
var descriptaminusb2 = `<td>
(A - B)<sup>2</sup> = (<span style="color:#e34a06">A</span> - <span style="color:#f9bd03">B</span>) x (<span style="color:#407026">A</span> - <span style="color:#31cce8">B</span>) =
</td>
<td style="border: 3px solid; border-color: #e34a06;">
<span style="color:#e34a06;">A<sup>2</sup></span>
</td>
<td>
 -
</td>
<td style="background-color:#407026">
2AB
</td>
<td>
 +
</td>
<td style="background-color:#31cce8">
B<sup>2</sup>
</td>`;
var descripta2b2 = `<td style="border: 3px solid; border-color: #e34a06;">
<span style="color:#e34a06">A<sup>2</sup></span></td> <td>-</td>
<td style="border: 3px solid; border-color:#31cce8">B<sup>2</sup>
</td>
<td> = (<span style="color:#f9bd03">A</span> + <span style="color:#e34a06">B</span>) x (<span style="color:#407026">A</span> - <span style="color:#31cce8">B</span>)
</td>
`;

var abcol="", a2col="", b2col="", botabcol="", atopcol="", aleftcol="", btopcol="", bleftcol="";

/*function that does things once, in setup(), so that they don't have to be
innecesarily rendered or calculated every frame, for no reason.*/
function initial(s){
		script=s;
		switch (s){
		case 1:
			document.getElementById("descript").innerHTML = descriptaplusb2;
			document.getElementById("rangeA").innerHTML = `10 <input type="range" id="A" min="10" max="20" value="15">20`;
			document.getElementById("rangeB").innerHTML = `6 <input type="range" id="B" min="6" max="15" value="11">15`;
			break;
		case 2:
			document.getElementById("descript").innerHTML = descriptaminusb2;
			document.getElementById("rangeA").innerHTML = `25 <input type="range" id="A" min="25" max="35" value="30">35`;
			document.getElementById("rangeB").innerHTML = `6 <input type="range" id="B" min="6" max="10" value="8">10`;
			break;
		case 3:
			document.getElementById("descript").innerHTML = descripta2b2;
			document.getElementById("rangeA").innerHTML = `24 <input type="range" id="A" min="24" max="35" value="30">35`;
			document.getElementById("rangeB").innerHTML = `6 <input type="range" id="B" min="6" max="10" value="8">10`;
			break;
	}
}
function amasb2() {
	b = document.getElementById("B").value * 10;
	a = document.getElementById("A").value * 10;
	aplusb = (a+b)/10;
	aminusb = (a-b)/10;

	switch(script){
		case 1:
			resultaplusb = ((a * a) + (2 * a * b) + (b * b))/100;
			document.getElementById("row2").innerHTML = "(A + B)<sup>2</sup> = (" + a/10 + " + " + b/10 + ")<sup>2</sup> = " + aplusb + "<sup>2</sup> = " + 	resultaplusb;
			x = (canvwidth - (a + b))/2;
			y = (canvheight - (a + b))/2;
			aplus = a + x;
			bplus = a + y;
			//The rectangles for (a+b)^2
			stroke(0);
			strokeWeight(3);
			fill(a2col);
			rect(x, y, a, a);
			fill(abcol);
			rect(aplus, y, b, a);
			rect(x, bplus, a, b);
			fill(b2col);
			rect(aplus, bplus, b, b);
			//Chars for (a+b)^2
			fill(0);
			noStroke();
			textAlign(CENTER, CENTER);
			//Big interior characters
			textSize(40);
			text("A", x + a / 2, y + a / 2);
			textSize(20);
			text("2", x + 15 + a / 2, y - 15 + a / 2);

			textSize(40);
			text("B", aplus + b / 2, bplus + b / 2);
			textSize(20);
			text("2", 15 + aplus + b / 2, bplus + b / 2 - 15);

			textSize(40);
			text("AB", aplus + b / 2, y + a / 2);
			textSize(40);
			text("AB", x + a / 2, bplus + b / 2);

				//Smaller outer characters
			textSize(25);
		  //top A and B
			textAlign(CENTER, BOTTOM);
			fill(btopcol);
			text("B", aplus + b / 2, y);
			fill(atopcol);
			text("A", x + a / 2, y);
			//Left A and B
			textAlign(RIGHT, CENTER);
			fill(aleftcol);
			text("A", x-3, y + a / 2);
			fill(bleftcol);
			text("B", x-3, bplus + b / 2);

			fill(0);
			//Bottom A and B
			textAlign(CENTER, TOP);
			text("A", x + a / 2, bplus + b / 1);
			text("B", aplus + b / 2, bplus + b / 1);

			//Right A and B
			textAlign(LEFT, CENTER);
			text("A", aplus + b / 1 + 3, y + a / 2);
			text("B", aplus + b / 1 + 3, bplus + b / 2);
			break;
		case 2:
			resultaminusb = ((a * a) - (2 * a * b) + (b * b))/100;
			document.getElementById("row2").innerHTML = "(A - B)<sup>2</sup> = (" + a/10 + " - " + b/10 + ")<sup>2</sup> = " + aminusb + "<sup>2</sup> = " + 	resultaminusb;
			x = (canvwidth - a)/2;
			y = (canvheight - a)/2;
			aplus = a + x;
			bplus = a + y;
			//The rectangles for (a-b)^2
			stroke(0);
			strokeWeight(2);

			line(x,y+2, aplus-b,y+2);
			line(x+2 ,y+2, x+2,bplus);

			fill(abcol);
			rect(aplus-b, y, b, a);
			rect(x, bplus-b, a, b);
			fill(b2col);
			rect(aplus-b, bplus-b, b, b);
			stroke(a2col);
			strokeWeight(4);
			noFill();
			rect(x, y, a, a);
			//Chars for (a-b)^2
			fill(a2col);
			noStroke();
			textAlign(CENTER, CENTER);
			//Big interior characters
			textSize(40);
			text("A", x + a / 2, y + a / 2);
			textSize(20);
			text("2", x + 15 + a / 2, y - 15 + a / 2);

			fill(0);
			textSize(40);
			text("B", aplus - b / 2, bplus - b / 2);
			textSize(20);
			text("2", 15 + aplus - b / 2, bplus - b / 2 - 15);

			textSize(40);
			text("AB", aplus - b / 2, y + (a-b) / 2);
			textSize(40);
			text("AB", x + (a-b) / 2, bplus - b / 2);

				//Smaller outer characters
			textSize(25);
		  //top A and B
			textAlign(CENTER, TOP);
			fill(atopcol);
			text("B", aplus - b / 2, y);

			textAlign(CENTER, BOTTOM);
			fill(btopcol);
			text("A", x + a / 2, y);
			//Left A and B
			textAlign(RIGHT, CENTER);
			fill(aleftcol);
			text("A", x-3, y + a / 2);
			textAlign(LEFT, CENTER);
			fill(bleftcol);
			text("B", x + 3, bplus - b / 2);

			fill(0);
			textAlign(CENTER, TOP);
			//Top aminusb
			text("A - B = " + aminusb, x + (a-b) / 2, y);
			//Bottom B
			text("B", aplus - b / 2, bplus );
			//Right B
			textAlign(LEFT, CENTER);
			text("B", aplus + 3, bplus - b / 2);
			//Left inner 22
			text(aminusb, x + 3, y + (a-b) / 2);

			break;
		case 3:
			resultaplusb = ((a * a) - (b * b))/100;
			document.getElementById("row2").innerHTML = "A<sup>2</sup>  - B<sup>2</sup> = " + a/10+ "<sup>2</sup>" + " - " + b/10 + "<sup>2</sup> = " + (a*a)/100 + " - " + (b*b)/100 + " = " + resultaplusb;
			x = (canvwidth - (a + b))/2;
			y = (canvheight - a)/2;
			aplus = a + x;
			bplus = a + y;
			//The rectangles for a^2-b^2

			stroke(0);
			strokeWeight(3);
			fill(abcol);
			rect(aplus, y, b, a);
			rect(x, bplus-b, a, b);

			stroke(b2col);
			noFill();
			rect(aplus-b,y, b, b);

			stroke(a2col);
			strokeWeight(3);
			noFill();
			rect(x, y, a, a);

			//Chars for a^2-b^2
			fill(a2col);
			noStroke();
			textAlign(CENTER, CENTER);
			//Big interior characters
			textSize(40);
			text("A", x + a / 2, y + a / 2);
			textSize(20);
			text("2", x + 15 + a / 2, y - 15 + a / 2);

			fill(b2col);
			textSize(40);
			text("B", aplus-b + b / 2, y + b / 2);
			textSize(20);
			text("2", 15 + aplus - b / 2, y + b / 2 - 15);

			fill(0);
			textSize(40);
			text("B", aplus + b / 2,bplus - b / 2);
			textSize(20);
			text("2", 15 + aplus + b / 2, bplus - b / 2 - 15);

			stroke(0);
			line(aplus, bplus -b, aplus+b, bplus-b);
			noStroke();

			fill(0);
			textSize(40);
			text("AB", aplus + b / 2, y + a / 2);
			textSize(40);
			text("AB", x + a / 2, bplus - b / 2);

				//Smaller outer characters
			textSize(25);
			//top A and B
			textAlign(CENTER, TOP);
			fill(atopcol);
			text("A", x + a / 2, y);
			fill(btopcol);
			text("B", aplus + b / 2, y);
			textAlign(CENTER, BOTTOM);

			fill(0);
			text("A + B", x + (a + b) / 2, y - 10);
			stroke(0);
			line(x, y-10, aplus+b, y-10);
			noStroke();

			//Left A and B
			textAlign(RIGHT, CENTER);
			fill(aleftcol);
			text("A", x-3, y + a / 2);
			textAlign(LEFT, CENTER);
			fill(bleftcol);
			text("B", x+3, bplus - b / 2);

			fill(0);
			text("A-B",x + 15, y+(a-b)/2);

			stroke(0);
			line(x+10, y+5, x+10, bplus-b-5);
			noStroke();

			fill(0);
			//Bottom A and B
			textAlign(CENTER, TOP);
			text("A", x + a / 2, bplus);
			text("B", aplus + b / 2, bplus);

			//Right A
			textAlign(LEFT, CENTER);
			text("A", aplus + b / 1 + 3, y + a / 2);

			//right illustrations

			fill(a2col);
			rect(aplus+b + 30, y, 100,100);

			textAlign(CENTER, BOTTOM);
			fill(0);
			textSize(20);
			text("A - B",aplus+b+30 + 130/2, y);
			textSize(10);
			text("2         2", aplus+b+30+130/2+7, y-15);

			fill(b2col);
			rect(aplus+b + 30 + 100 -30, y, 30,30);

			textAlign(CENTER, BOTTOM);
			fill(0);
			textSize(20);
			text("(A + B)x(A - B)",aplus+b+30 + 130/2, bplus -100);

			stroke(0);
			strokeWeight(1);
			line(aplus+b+30, y+70, aplus+b+30+100+30,y+70);
			line(aplus+b+30+100, y, aplus+b+30+100+30,y);
			line(aplus+b+30+100, y+100-1, aplus+b+30+100+30,y+100-1);
			line(aplus+b+30+100+30, y, aplus+b+30+100+30,y+100-1);

			noStroke();

			fill(a2col);
			rect(aplus+b + 30, bplus-100, 100+30,100-30);

			stroke(0);
			strokeWeight(1);
			line(aplus+b+30, bplus, aplus+b+30+100+30-1,bplus);
			line(aplus+b+30, bplus-30, aplus+b+30+100+30-1,bplus-30);
			line(aplus+b+30, bplus, aplus+b+30,bplus-30);
			line(aplus+b+30+100+30-1, bplus, aplus+b+30+100+30-1,bplus-30);
			line(aplus+b+30+100, bplus, aplus+b+30+100,bplus-100);
			noStroke();


			break;
  }
	document.getElementById("a").innerHTML = "A = " + a/10;
	document.getElementById("b").innerHTML = "B = " + b/10;
	//line(x,bplus+b/2, aplus+b,bplus+b/2);

}
