//Chap 17 - 20

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// let multidimensionalArray = [];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];
  
  
  
//   for (let i = 0; i < matrix.length; i++) {
//     document.write(matrix[i].join(" ") + "<br>");
//   }


// 3. Write a program to print numeric counting from 1 to 10.

// for (let i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
//   }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// let tableNumber = parseInt(prompt("Enter a number to show its multiplication table:"));
// let tableLength = parseInt(prompt("Enter length multiplication table:"));

// document.write(`<h1>Multiplication Table of ${tableNumber}</h1>`);
// document.write(`<h1>Length ${tableLength}</h1>`);

// for (let i = 1; i <= tableLength; i++) {
//   document.write(`${tableNumber} x ${i} = ${tableNumber * i}<br>`);
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// let body = document.body;
// let h1;

// // Counting Series
// h1 = document.createElement('h1');
// h1.innerText = 'Counting Series:';
// body.appendChild(h1);
// for (let i = 1; i <= 15; i++) {
//   let text = document.createTextNode(i + ", ");
//   body.appendChild(text);
// }
// let br = document.createElement('br');
// body.appendChild(br);

// // Reverse Counting Series
// h1 = document.createElement('h1');
// h1.innerText = 'Reverse Counting Series:';
// body.appendChild(h1);
// for (let i = 10; i >= 1; i--) {
//   let text = document.createTextNode(i + ", ");
//   body.appendChild(text);
// }
// body.appendChild(br);

// // Even Series
// h1 = document.createElement('h1');
// h1.innerText = 'Even Series:';
// body.appendChild(h1);
// for (let i = 0; i <= 20; i += 2) {
//   let text = document.createTextNode(i + ", ");
//   body.appendChild(text);
// }
// body.appendChild(br);

// // Odd Series
// h1 = document.createElement('h1');
// h1.innerText = 'Odd Series:';
// body.appendChild(h1);
// for (let i = 1; i <= 20; i += 2) {
//   let text = document.createTextNode(i + ", ");
//   body.appendChild(text);
// }
// body.appendChild(br);

// // Series (Multiples of 2k)
// h1 = document.createElement('h1');
// h1.innerText = 'Series:';
// body.appendChild(h1);
// for (let i = 2; i <= 20; i += 2) {
//   let text = document.createTextNode(i + "k, ");
//   body.appendChild(text);
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

// while (true) {
//   let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

//   if (userInput === null) {
//     break;
//   }

//   userInput = userInput.toLowerCase();

//   let index = bakeryItems.findIndex(item => item.toLowerCase() === userInput);

//   if (index !== -1) {
//     alert(`${userInput.charAt(0).toUpperCase() + userInput.slice(1)} is available at index ${index} in our bakery.`);
//   } else {
//     alert(`We are sorry. ${userInput.charAt(0).toUpperCase() + userInput.slice(1)} is not available in our bakery.`);
//   }
// }


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// let numbers = [24, 53, 78, 91, 12];
// let largest = numbers[0];


// let numbers = [24, 53, 78, 91, 12];
// let largest = Math.max(...numbers);

// console.log("The largest number is: " + largest);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// let numbers = [24, 53, 78, 91, 12];
// let smallest = Math.min(...numbers);

// console.log("The smallest number is: " + smallest);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for (let i = 5; i <= 100; i += 5) {
//   document.write(i + ", ");
//   }
