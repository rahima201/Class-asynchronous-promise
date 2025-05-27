// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { message: "Fetched successfully" };
//       const error = { messsage: "Failed to fetch data" };

//       //resolve data
//       reject(error);
//     }, 2000);
//   });
// };

// fetchData()
//   .then((result) => console.log("result", result))
//   .catch((error) => console.log(error));

// //

//

//

//. second example for promise

// //make a promise
// const myPromise = new Promise((resolve, reject) => {
//   let success = true; //change to false to test error

//   if (success) {
//     resolve("success"); //when done
//   } else {
//     reject("failed"); //when error
//   }
// });

// //use the promise
// myPromise
//   .then((msg) => {
//     console.log(msg); //show if success
//   })
//   .catch((err) => {
//     console.log(err); //show if error
//   });

//

//

//// Create a new Promise
const myPromise = new Promise(function (resolve, reject) {
  let success = true; // change this to false to see the reject case

  if (success) {
    resolve("Promise resolved successfully!"); // when everything is okay
  } else {
    reject("Promise rejected with an error."); // if something went wrong
  }
});

// Use the promise and handle success and error
myPromise
  .then(function (message) {
    console.log("Success:", message); // runs if promise is resolved
  })
  .catch(function (error) {
    console.log("Error:", error); // runs if promise is rejected
  });
