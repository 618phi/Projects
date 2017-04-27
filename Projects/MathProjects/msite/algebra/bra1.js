function a1() {
    document.getElementById("d1").innerHTML = "2[1] = 4x + 8y = 12 = [3]<br> [3] + [2] = 0x + 5y = 15";
}
function a2() {
    document.getElementById("d2").innerHTML = "From 'Hint 1' find y <br> place y value into [1] <br> solve for x";
}
function a3() {
    document.getElementById("d3").innerHTML = "x = -3 <br> y = 3";
}
function a4() {
    var v1 = document.getElementById("i1").value;
    var v2;
    if (v1 ==  - 3) {
        v2 = "Correct answer <br> Well done";
    }
    else {
        v2 = "Incorrect <br> Try the hints";
    }
    document.getElementById("d4").innerHTML = v2;
}
function a5() {
    var v1 = document.getElementById("i2").value;
    var v2;
    if (v1 == 3) {
        v2 = "Correct answer <br> Well done";
    }
    else {
        v2 = "Incorrect <br> Try the hints";
    }
    document.getElementById("d5").innerHTML = v2;
}
function b1() {
    document.getElementById("d6").innerHTML = "2[1] = 4x - 6y = 22 = [3]<br> 3[2] = 15x + 6y = -3 = [4]";
}
function b2() {
    document.getElementById("d7").innerHTML = "Solve for x with [3] + [4] <br> x value into [1] gives y ";
}
function b3() {
    document.getElementById("d8").innerHTML = "x = 1 <br> y = -3";
}
function b4() {
    var v1 = document.getElementById("i3").value;
    var v2;
    if (v1 == 1) {
        v2 = "Correct answer <br> Well done";
    }
    else {
        v2 = "Incorrect <br> Try the hints";
    }
    document.getElementById("d9").innerHTML = v2;
}
function b5() {
    var v1 = document.getElementById("i4").value;
    var v2;
    if (v1 ==  - 3) {
        v2 = "Correct answer <br> Well done";
    }
    else {
        v2 = "Incorrect <br> Try the hints";
    }
    document.getElementById("d10").innerHTML = v2;
}
function c1() {
    document.getElementById("d11").innerHTML = " create 2 new equations without z <br>[1] + [3] = 3x + 4y = 11 = [4]<br>3[1] + [2] = 4x + y = 6 = [5]";
}
function c2() {
    document.getElementById("d12").innerHTML = "[4] - 4[5] gives x <br> x value into [4] gives y <br> x and y into [1] gives z";
}
function c3() {
    document.getElementById("d13").innerHTML = "x = 1 <br> y = 2 <br> z = -1";
}
function c4() {
    var v1 = document.getElementById("i5").value;
    var v2;
    if (v1 == 1) {
        v2 = "Correct answer <br> Well done";
    }
    else {
        v2 = "Incorrect <br> Try the hints";
    }
    document.getElementById("d14").innerHTML = v2;
}
function c5() {
    var v1 = document.getElementById("i6").value;
    var v2;
    if (v1 == 2) {
        v2 = "Correct answer <br> Well done";
    }
    else {
        v2 = "Incorrect <br> Try the hints";
    }
    document.getElementById("d15").innerHTML = v2;
}
function c6() {
    var v1 = document.getElementById("i7").value;
    var v2;
    if (v1 ==  - 1) {
        v2 = "Correct answer <br> Well done";
    }
    else {
        v2 = "Incorrect <br> Try the hints";
    }
    document.getElementById("d16").innerHTML = v2;
}
