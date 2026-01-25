// alert("hello world");
// console.log("Paramjeet");
Username = "Paramjeet paramjeet";
console.log(Username);
x = null;
y = undefined;
console.log(x);
console.log(y);
let age = 22;
console.log(age);
// If you add Let again it will give error
// let age = 23;
age = age + 1;
console.log(age);
const pi = 3.14;
console.log(pi);
// pi = pi +1;
// console.log(pi); This will lead to error because const variable cannot be changed
var city = "New Delhi";
console.log(city);
var city = "Mumbai";
console.log(city);
// Give type of variable
console.log(typeof Username);

const product = {
    name: "Laptop",
    price: 45000,
    brand: "HP",
    color: "Silver"
}
console.log(product);
console.log(typeof product);
// You can change the properties of object even if it is declared with const


// // Ask the user for input
// let userInput = prompt("Enter your name:");

// // Display the stored input
// console.log("Hello, " + userInput);

// if(userInput%5 === 0){
//     console.log("The number is divisible by 5");
// } else {
//     console.log("The number is not divisible by 5");
// }

// Quiz: Grade Calculation using Switch Case
// let userinput = Number(prompt("Enter the marks of the student:"));

// switch(true){
//     case (userinput >= 80 && userinput <= 100):
//         console.log("Grade A");
//         break;
//     case (userinput >= 70 && userinput <= 79):
//         console.log("Grade B");
//         break; 
//     case (userinput >= 60 && userinput <= 69):
//         console.log("Grade C");
//         break;
//     case (userinput >= 50 && userinput <= 59):
//         console.log("Grade D");
//         break;
//     case (userinput >= 0 && userinput <= 49):
//         console.log("Grade F");
//         break;
//     default:
//         console.log("Invalid marks entered");
// }

// Print even numbers from 1 to 100
// for(let i = 1; i <= 100; i++){
//     if(i % 2===0){
//         console.log(i);
//     }
// }

// Quiz: Generate Username
// let Username = prompt("Enter your Full name:");
// UsernameLength = Username.length;
// console.log(`The username is @${Username}${UsernameLength}`);

pstr = "Paramjeet";
console.log(pstr[1]);

// Print the string in uppercase
console.log(pstr.toUpperCase());

// Print the string in lowercase
console.log(pstr.toLowerCase());

psstr = "    Paramjeet     ";
console.log(psstr.trim());

console.log(pstr.slice(1,6));
let user = "Param";
let name = "jeet";

console.log(user.concat(name));
console.log(user.replace("P", "M"));

console.log(user.charAt(2));

let i = 0;
for( i = 0; i<=20; i++){
    console.log(pstr[i]);
}
i = 0;
while ( i <= 20){
    console.log(pstr[i]);
    i++;
}

let size = 0;
for( let i of pstr){
    console.log(i);
    size++;
}

console.log(size);

//Pratice Question in which we have to find average marks of the students
// let stdMarks = [85, 97, 44, 37, 76, 60];
// let avmarks = 0;

// for(let i= 0; i<stdMarks.length; i++){
//     avmarks  = avmarks + stdMarks[i];
// }

// console.log("The averge marks of students are "+(avmarks/stdMarks.length));

//Practice Question in which we have to change price of things store in array after 10% off in it 

let price = [250, 645, 300, 900, 50];

for(let i=0; i<price.length; i++){
    price[i] = price[i]-(price[i]*(1/10));
}

for(let i=0; i<price.length; i++){
    console.log(price[i]);
}