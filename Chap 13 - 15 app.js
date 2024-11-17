//chap 13 - 15

// 1. Declare an empty array using JS literal notation to store
// student names in future

// let studentNames = [];



// 2. Declare an empty array using JS object notation to store
// student names in future.

// let studentNames = new Array();

// 3. Declare and initialize a strings array

// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];


// 4. Declare and initialize a numbers array.

// let numbers = [10, 20, 30, 40, 50];

// 5. Declare and initialize a boolean array.

// let boolValues = [true, false, true, false, true];

// 6. Declare and initialize a mixed array

// let mixedArray = [1, "hello", true, 3.14, null, undefined, [1, 2, 3], {name: "John"}];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// let qualifications = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD" ]; 
// document.write("<h1>Qualifications</h1>"); 
// document.write("<ol>"); 
// qualifications.forEach((qualification) => { 
//   document.write(`\<li>${qualification}\</li>`); 
// }); 
// document.write("</ol>");


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// let studentNames = ["Michael", "John", "Tony"];
// let studentScores = [320, 230, 480];
// let totalMarks = 500;


// studentNames.forEach((name, index) => {
//   let percentage = (studentScores[index] / totalMarks) * 100;
//   document.write(`Score of ${name} is ${studentScores[index]}. Percentage: ${percentage.toFixed(2)}% <br>`);
// });


// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// Initialize array with color names
// let colors = ["Red", "Green", "Blue", "Yellow"];

// // Display initial array
// document.write("<h1>Initial Colors:</h1>");
// document.write(colors.join("<br>"));

// // a. Add color to beginning
// let newColor = prompt("Enter color to add to beginning:");
// colors.unshift(newColor);
// document.write("<h1>Updated Colors after adding to beginning:</h1>");
// document.write(colors.join("<br>"));

// // b. Add color to end
// newColor = prompt("Enter color to add to end:");
// colors.push(newColor);
// document.write("<h1>Updated Colors after adding to end:</h1>");
// document.write(colors.join("<br>"));

// // c. Add two colors to beginning
// colors.unshift("Purple", "Orange");
// document.write("<h1>Updated Colors after adding two to beginning:</h1>");
// document.write(colors.join("<br>"));

// // d. Delete first color
// colors.shift();
// document.write("<h1>Updated Colors after deleting first:</h1>");
// document.write(colors.join("<br>"));

// // e. Delete last color
// colors.pop();
// document.write("<h1>Updated Colors after deleting last:</h1>");
// document.write(colors.join("<br>"));

// // f. Add color at specific index
// let index = parseInt(prompt("Enter index to add color:"));
// newColor = prompt("Enter color to add:");
// colors.splice(index, 0, newColor);
// document.write("<h1>Updated Colors after adding at specific index:</h1>");
// document.write(colors.join("<br>"));

// // g. Delete colors from specific index
// index = parseInt(prompt("Enter index to delete colors from:"));
// let count = parseInt(prompt("Enter number of colors to delete:"));
// colors.splice(index, count);
// document.write("<h1>Updated Colors after deleting from specific index:</h1>");
// document.write(colors.join("<br>"));


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// let studentScores = [320, 230, 480, 120];

// document.write("Scores of Students: " + studentScores.join(", ") + "<br>");

// // Sort scores in ascending order
// studentScores.sort((a, b) => a - b);

// document.write("Ordered Scores of Students: " + studentScores.join(", "));
// ``()

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// document.write("<h1>Cities</h1>");
// document.write("Cities List:"  + cities.join(", ") + "<br>");

// // Copy 3 array elements from cities to selectedCities starting from index 2
// let selectedCities = cities.slice(2, 4);

// document.write("Selected cities list: " + selectedCities.join(", "));


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// let arr = ["This ", " is ", " my ", " cat"];

// document.write("Array: " + arr + "<br>");

// // Use join() to create a single string
// let sentence = arr.join("");

// document.write("String: " + sentence);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// let devices = [];

// // Store values in FIFO order
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");

// document.write("Devices:" + devices.join(",") + "<br><br>");

// // Access values in FIFO order

// while (devices.length > 0) {
//   document.write("Out: " + devices.shift() + "<br>");
// }

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// let devices = [];

// // Store values in LIFO order
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");


// document.write("Devices:" + devices.join(",") + "<br><br>");

// // Access values in LIFO order

// while (devices.length > 0) {
//   document.write("Out: " + devices.pop() + "<br>");
// }

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<h1>Phone Manufacturers</h1>");
// document.write("<select>");

// // Display options
// manufacturers.forEach((manufacturer) => {
//   document.write(`<option value="${manufacturer}">${manufacturer}</option>`);
// });

// document.write("</select>");