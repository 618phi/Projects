
                               function a1() {
document.getElementById("d1").innerHTML = "ax<sup>2</sup> + bx + c = 0 <br> &there4; b = -1 = 2 + (-3) <br> c = -6 = 2 * (-3)";
}

function a2() {
document.getElementById("d2").innerHTML = "Following hint 1 <br> x<sup>2</sup> - x - 6 = 0 <br> &there4; (x + 2)(x - 3) = 0";
}

function a3() {
document.getElementById("d3").innerHTML = "x = -2 <br> x = 3";
}

function a4() {
var v1 = document.getElementById("i1").value;
var v2 = document.getElementById("i2").value;
var v3;
if ((v1 == -2 && v2 == 3)||(v1 == 3 && v2 == -2)){
v3 = "Correct answer <br> Well done";
} else {
v3 = "Incorrect <br> Try the hints";
}
document.getElementById("d4").innerHTML = v3;
}

                                  

                                     function b1() {
document.getElementById("d11").innerHTML = "ax<sup>2</sup> + bx + c = 0 <br> c = -12 = 3 * (-4) <br> b = -1 = 3 + (-4)";
}

function b2() {
document.getElementById("d21").innerHTML = "Following hint 1 <br> x<sup>2</sup> - x - 12 = 0 <br> &there4; (x + 3)(x - 4) = 0";
}

function b3() {
document.getElementById("d31").innerHTML = "x = -3 <br> x = 4";
}

function b4() {
var v1 = document.getElementById("i11").value;
var v2 = document.getElementById("i21").value;
var v3;
if ((v1 == -3 && v2 == 4)||(v1 == 4 && v2 == -3)){
v3 = "Correct answer <br> Well done";
} else {
v3 = "Incorrect <br> Try the hints";
}
document.getElementById("d41").innerHTML = v3;
}

                                
                                   function c1() {
document.getElementById("d12").innerHTML = "Divide through by 2 <br> x<sup>2</sup> + 3x = 1.5 <br> &there4; (x + (3/2))<sup>2</sup> - (3/2)<sup>2</sup> = 1.5 ";
}

function c2() {
document.getElementById("d22").innerHTML = "Following hint 1 <br> (x + (3/2))<sup>2</sup> = 1.5 + 1.5<sup>2</sup> <br> &there4; x = -1.5 &plusmn;&radic;(1.5 + 1.5<sup>2</sup>) ";
}

function c3() {
document.getElementById("d32").innerHTML = "x = -3.44 <br> x = 0.44";
}

function c4() {
var v1 = document.getElementById("i12").value;
var v2 = document.getElementById("i22").value;
var v3;
if ((v1 == -3.44 && v2 == 0.44)||(v1 == 0.44 && v2 == -3.44)){
v3 = "Correct answer <br> Well done"
} else {
v3 = "Incorrect <br> Try the hints";
}
document.getElementById("d42").innerHTML = v3;
}


                                function c14() {
document.getElementById("d124").innerHTML = "Divide through by 4 <br> x<sup>2</sup> + (x/2) = 4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br>  &there4; (x + (1/4))<sup>2</sup> - (1/4)<sup>2</sup> = 4 ";
}

function c24() {
document.getElementById("d224").innerHTML = "Following hint 1 <br> (x + (1/4))<sup>2</sup> = 4 + 0.25<sup>2</sup> <br> &there4; x = -0.25 &plusmn;&radic;(4 + 0.25<sup>2</sup>) ";
}

function c34() {
document.getElementById("d324").innerHTML = "x = -2.27 <br> x = 1.77";
}

function c44() {
var v1 = document.getElementById("i124").value;
var v2 = document.getElementById("i224").value;
var v3;
if ((v1 == -2.27 && v2 == 1.77)||(v1 == 1.77 && v2 == -2.27)){
v3 = "Correct answer <br> Well done";
} else {
v3 = "Incorrect <br> Try the hints";
}
document.getElementById("d424").innerHTML = v3;
}
                                      


                                     function c145() {
document.getElementById("d1245").innerHTML = "ax<sup>2</sup> + bx + c = 0 <br> &there4;  x = (-b &plusmn;&radic;(b<sup>2</sup> - 4ac)) / 2a";
}

function c245() {
document.getElementById("d2245").innerHTML = "Following hint 1 <br> x =  (-5 &plusmn;&radic;(5<sup>2</sup> - 4*3*(-7))) / 2*3"; 
}

function c345() {
document.getElementById("d3245").innerHTML = "x = -2.57 <br> x = 0.91";
}

function c445() {
var v1 = document.getElementById("i1245").value;
var v2 = document.getElementById("i2245").value;
var v3;
if ((v1 == -2.57 && v2 == 0.91)||(v1 == 0.91 && v2 == -2.57)){
v3 = "Correct answer <br> Well done";
} else {
v3 = "Incorrect <br> Try the hints";
}
document.getElementById("d4245").innerHTML = v3;
}














