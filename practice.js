//let a = 10;
//let b="5";
//console.log(Number(b)); // "210"
//console.log(typeof b); // "number"

//object example
//const Mem={
// First:"John",
// Last:"Doe",
//Age:30,
//};
//console.log(Mem.First+Mem.Last +" "+ Mem.Age); // "JohnDoe 30"

//let car;
//console.log(typeof(car));

/*let emi=Add(10,20,25);
console.log(emi); // 30
function Add(a,b,c){
   
    return c=a+b+c;
  
};*/

/*const car ={
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function() { 
        return car.brand + " " + car.model + " is starting with color" + car.color + ".";
    },
};
console.log(car); // "Toyota Corolla is starting." */

/* unshift method example
let A=[12,"loki",true,45.6];

A.unshift("sri"); // Adds "sri" to the beginning of the array
console.log(A); // [ 'sri', 12, 'loki', true, 45.6 ] */

//constructer example*/

/*function lok(name,age){
    this.name=name;
    this.age=age;   

}

const person1 = new lok("John", 30);

console.log(person1.name); // "John"
//  */

/*let lok="iuanhcfffffffdbvcfjvhjk";
console.log(lok.length); // 20   */

/*var myNum=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
for(let i=0;i<myNum.length;i++){
    
} */

//Area of rectangle

/* var length = 10;
var width = 20;
var area = length * width;
console.log("Area of rectangle: " + area); // "Area of rectangle: 50"
*/

// program to find the ASCII value of a character

/*const a=0;

if(a){
    console.log("thumbsup");
}
else{
    console.log("thumbsdown");
}
*/

/*const gadi= "Car";

switch(gadi){
    case "Car":
        console.log("This is a car.");
        break;
    case "Bike":
        console.log("This is a bike.");
        break;
    default:
        console.log("Unknown vehicle.");
}
*/

/*
const bill= 320;
if(bill>=50&& bill<=300){
    const tip= bill*0.15;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill+tip}.`);
}
else{
    const tip=bill*0.2
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill+tip}.`);
}

*/

/*
 const lok= function (year)
 {
    return 2025-year;
 }

 const age=[1998, 2000, 2002, 1995, 1996];

 console.log(lok(age[1],age[2],age[3],age[4])); // 25, 23, 21, 30, 29  */

"use strict";
/*
const jon = {
  firstName: "John",
  lastName: "Doe",
  birthYear: 1990,
  Friends: ["micheal", "george", "peter"],
};

console.log(
  `${jon.firstName} has ${jon.Friends.length}friends, and his best friend is called ${jon.Friends[0]}`
); // "micheal"/

*/

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// }
/*
const n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(`The sum of the first ${n} natural numbers is: ${sum}`); // "The sum of the first 10 natural numbers is: 55"
*/

//factoriql program
// const n = 6;
// function factorial(n) {
//   if (n === 0 || n === 1) {
// return 1;
//   } else {
// return n * factorial(n - 1);
//   }
// }
// console.log(`The factorial of ${n} is: ${factorial(n)}`); // "The factorial of 6 is: 720"

// document.querySelector(".message").textContent = "Correct Number! 🎉";
// document.querySelector(".number").textContent = 23;

document.querySelector(".check").addEventListener("click", function () {
  const m = Number(document.querySelector(".guess").value);

  if (!m) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  } else if (m == 8 || m == 6 || m == 4 || m == 2 || m == 13) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  } else {
    document.querySelector(".message").textContent = "❌ Wrong Number!";
  }
});
