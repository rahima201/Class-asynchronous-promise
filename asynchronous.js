// Step 1 is printed first
console.log("Step 1");

// setTimeout is asynchronous — it runs later (after 3 seconds)
setTimeout(function () {
  console.log("Step after a delay of 3 seconds"); // This runs last, after 3 seconds
}, 3000); // 3000 milliseconds = 3 seconds

// These steps run immediately, without waiting
console.log("Step 3");
console.log("All Done");
