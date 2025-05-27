//1
// This function says hello first, then runs another function (a callback)
function sayHello(callback) {
  console.log("Hi, I'm learning JavaScript!"); // First message

  callback(); // Now run the callback function
}

// Call the sayHello function
// Give it another function (the callback) that shows a second message
sayHello(function () {
  console.log("This is a callback function."); // Second message
});
