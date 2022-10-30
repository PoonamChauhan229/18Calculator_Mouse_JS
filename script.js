var currentInput = document.getElementById("input");
var equation = document.getElementById("equation");
var equations = [];
var answers = [];

let buttonsDiv = document.getElementById("buttonsDiv");

buttonsDiv.addEventListener("click", calculate);

var count = 0;
function calculate(event) {
  count++;
  console.log("button is clicked" + count);
  console.log(event.target.innerText);

  // adding numbers to the inputbox.
  var buttonText = event.target.innerText;

  if (buttonText == "x") {
    buttonText = "*";
    currentInput.value += buttonText;
  } else if (buttonText == "C" || buttonText == "CE") {
    currentInput.value = 0;
  } else if (currentInput.value == 0) {
    currentInput.value = buttonText;
  } else if (buttonText == "=" || buttonText == "Enter") {
    var value = currentInput.value;
    var answer = eval(value);
    currentInput.value = answer;
  } else {
    currentInput.value += buttonText;
  }
}
