console.log("Paramjeet This side");
// alert("Welcome to my website!");

age = 21;
console.log("My age is " + (age - 2));

a = 56;
b = "56";
console.log(a == b); //loose comparison give true not check datatype
console.log(a === b); //strict comparison give false check datatype also

Paramjeet = {
    name: "Paramjeet ",
    age: 19,
    hobbies: ["coding", "playing"],
    isAdult: true
}

console.log(Paramjeet);
console.log(Paramjeet.hobbies[0]); //accessing first element of hobbies array
console.log(Paramjeet.hobbies[1]); //accessing second element of hobbies array
console.log(Paramjeet.age); //accessing age property

console.log(typeof Paramjeet); //object
console.log(typeof Paramjeet.isAdult);

let mode = "light";

function DarkMode() {
    if (mode === "light") {
        mode = "dark";
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff"; // text becomes white
        document.querySelector(".nav").style.backgroundColor = "pink";



    } else {
        mode = "light";
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000"; // text becomes black
        document.querySelector(".nav").style.backgroundColor = "#000";
    }
}


