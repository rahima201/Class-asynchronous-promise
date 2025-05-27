// //1. first example for fetch
// const API = "https://jsonplaceholder.typicode.com/posts";

// fetch(API)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("HTTP error");
//     }

//     return response.json();
//   })

//   .then((data) => console.log("API data", data))
//   .catch((error) => console.log("Error occured", error));

//

//

// //2.second example for fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//

//

//

//3. third example for fetch
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json()) // convert to JSON
//   .then((data) => {
//     console.log(data); // print the data
//   })
//   .catch((error) => {
//     console.log(error); // print any error
//   });

//
//
//
//
// 4. Fourth example for fetch:

// Use fetch to get data from an API (dummy JSON data of products)
fetch("https://dummyjson.com/products")
  // When the response comes back, convert it to JSON format
  .then((response) => response.json())

  // Once the data is converted, do something with it (like print it)
  .then((data) => {
    console.log(data); // Show the whole product data in the console
  })

  // If there is any error (like internet issue), catch and print it
  .catch((error) => {
    console.log(error); // Show error in console
  });
