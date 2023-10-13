// This function clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
}

// This function display values
function display(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}

function back() {
  var p = document.getElementById("result").value;
  document.getElementById("result").value = p.substring(0, p.length - 1);
}
