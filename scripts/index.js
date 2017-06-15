$(document).ready(function () {

  // stores input from user
  var inputs = [""];
  // stores current input
  var totalString;
  // operators array without .
  var operators1 = ["+", "-", "*", "/"];
  // operators array with .
  var operators2 = ["."];
  // #s
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function getValue(input) {

    if (operators2.includes(inputs[inputs.length - 1] === true && input === ".")){
      console.log("Duplicate '.' ");
    }
    else if (inputs.length === 1 && operators1.includes(input) === false){
      inputs.push(input);
    }
    else if (operators1.includes(inputs[inputs.length-1]) === false){
      inputs.push(input);
    }
    else if (nums.includes(Number(input))){
      inputs.push(input);
    }
    update();
  }

  function update() {
    totalString = inputs.join("");
    $("#steps").html(totalString);
  }

  function getTotal() {
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
  }

  $("a").on("click", function () {
    if (this.id === "deleteAll") {
      inputs = ["0"];
      update();
    } else if (this.id === "backOne") {
      inputs.pop();
      update();
    } else if (this.id === "total") {
      getTotal();
    } else if (this.id === "0" && inputs[0] === "0") {
      inputs.shift("0"); 
      update();
    } else {
      if (inputs[inputs.length - 1].indexOf("+", "-", "*", "/", ".") === -1) {
        getValue(this.id);
      } else {
        getValue(this.id);
      }
    }
  })
});