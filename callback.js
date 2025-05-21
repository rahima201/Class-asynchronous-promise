const button = document.getElementById("btn");

button.addEventListener("class", function () {});

function calculator(num1, callBack) {
  return num1 + callBack();
}

const res = calculator(10, function () {
  return 20;
});
console.log(res);
