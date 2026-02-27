<--ADD JS-->
// let sum=function(a,b){
//     var a=Number(document.getElementById("a").value);
//     var b=Number(document.getElementById("b").value);
//     let add=a+b;
//     document.writeln("The sum is:"+add);
// }

// function Arrays(){
//     let array=[1,2,3,4,5];
//     let student=["jaya","bhavana","gnani","sujani"];
//     for(let )
// }
<--LOGIN JS-->
// function login() {
//     let uname = document.getElementById("username").value;
//     let pwd = document.getElementById("password").value;

//     if (uname === "admin" && pwd === "2824") {
//         alert("Login successfully");
//     } else {
//         alert("Login Failed");
//     }
// }

let fruits = ["Apple", "Banana", "Mango"];

console.log("Initial Array:", fruits);

// push() → add element at the end
fruits.push("Orange");
console.log("After push:", fruits);

// unshift() → add element at the beginning
fruits.unshift("Grapes");
console.log("After unshift:", fruits);

// pop() → remove last element
fruits.pop();
console.log("After pop:", fruits);

// shift() → remove first element
fruits.shift();
console.log("After shift:", fruits);

// indexOf() → find index of an element
let index = fruits.indexOf("Banana");
console.log("Index of Banana:", index);

// includes() → check if element exists
let check = fruits.includes("Mango");
console.log("Mango exists?", check);


