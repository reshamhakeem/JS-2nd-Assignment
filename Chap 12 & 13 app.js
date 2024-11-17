//Chap # 12 & 13

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// function checkCharacter(input) {
//     let asciiCode = input.charCodeAt(0);

//     if (asciiCode >= 48 && asciiCode <= 57) {
//         console.log("Input is a number");
//     } else if (asciiCode >= 65 && asciiCode <= 90) {
//         console.log("Input is an uppercase letter");
//     } else if (asciiCode >= 97 && asciiCode <= 122) {
//         console.log("Input is a lowercase letter");
//     } else {
//         console.log("Input is a special character");
//     }
// }

// let input = prompt("Enter a character: ");
// checkCharacter(input);



// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// function compareIntegers(num1, num2) {
//     if (num1 > num2) {
//         console.log(`${num1} is larger.`);
//     } else if (num1 < num2) {
//         console.log(`${num2} is larger.`);
//     } else {
//         console.log("Both numbers are equal.");
//     }
// }


// let num1 = parseInt(prompt("Enter first integer:"));
// let num2 = parseInt(prompt("Enter second integer:"));


// if (isNaN(num1) || isNaN(num2)) {
//     console.log("Invalid input. Please enter integers only.");
// } else {
//     compareIntegers(num1, num2);
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// function checkNumberSign(num) {
//     if (num > 0) {
//         console.log(`${num} is positive.`);
//     } else if (num < 0) {
//         console.log(`${num} is negative.`);
//     } else {
//         console.log(`${num} is zero.`);
//     }
// }


// let num = parseFloat(prompt("Enter a number:"));


// if (isNaN(num)) {
//     console.log("Invalid input. Please enter a number.");
// } else {
//     checkNumberSign(num);
// }

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// function isVowel(char) {

//     char = char.toLowerCase();
    
   
//     return (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u');
// }


// let char = prompt("Enter a character: ");


// if (char.length !== 1) {
//     console.log("Invalid input. Please enter a single character.");
// } else {
//     console.log(isVowel(char));
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// let correctPassword = "password123";

// // Function to validate user password
// function validatePassword() {
//     // Ask user to enter their password
//     let userInput = prompt("Enter your password: ");

//     // Check if user has entered password
//     if (userInput === null || userInput.length === 0) {
//         alert("Please enter your password");
//     } else {
//         // Check if both passwords are same
//         if (userInput === correctPassword) {
//             alert("Correct! The password you entered matches the original password");
//         } else {
//             alert("Incorrect password");
//         }
//     }
// }

// // Call the validation function
// validatePassword();

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// let greeting;
// let hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// console.log(greeting); // Output: "Good day"

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// let time = prompt("Enter time in 24-hour format (HHMM):");

// // Convert input to hours and minutes
// let hours = parseInt(time.substring(0, 2));
// let minutes = parseInt(time.substring(2));

// // Validate input
// if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
//   console.log("Invalid time format. Please use HHMM.");
// } else {
//   // Determine time of day
//   if (hours < 12) {
//     console.log(`Good morning! It's ${hours}:${minutes.toString().padStart(2, '0')}.`);
//   } else if (hours === 12) {
//     console.log(`Good afternoon! It's ${hours}:${minutes.toString().padStart(2, '0')}.`);
//   } else if (hours < 17) {
//     console.log(`Good afternoon! It's ${hours}:${minutes.toString().padStart(2, '0')}.`);
//   } else {
//     console.log(`Good evening! It's ${hours}:${minutes.toString().padStart(2, '0')}.`);
//   }
// }


















