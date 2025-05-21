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

//make a promise
const myPromise = new Promise((resolve, reject) => {
  let success = true; //change to false to test error

  if (success) {
    resolve("success"); //when done
  } else {
    reject("failed"); //when error
  }
});

//use the promise
myPromise
  .then((msg) => {
    console.log(msg); //show if success
  })
  .catch((err) => {
    console.log(err); //show if error
  });

//

//

//
