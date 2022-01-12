function countToTen() {
    var count = 0;
    while (count < 10) {
        count ++;
        document.getElementById("theCount").innerHTML += count + "<br>";
    }
}

var firstNumber = prompt("Enter the first Number: ");
var secondNumber = prompt("Enter the second number: ");
var total = Number(firstNumber) + Number(secondNumber);
alert (total);
