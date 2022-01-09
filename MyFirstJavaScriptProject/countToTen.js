function countToTen() {
    var count = 0;
    while (count < 10) {
        count ++;
        document.getElementById("theCount").innerHTML += count + "<br>";
    }
}

var firstNumber = 3;
var secondNumber = 7;
var total = Number(firstNumber) + Number(secondNumber);
alert (total);