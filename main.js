const quote1 = "The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.";
const quote2 = "\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"";
console.log(quote1); //1
console.log(quote2); //2

let numbera = "10";
console.log(typeof numbera);
let numberaInt = parseInt(numbera);
console.log(typeof numberaInt); //3

let numberb = "9.8";
let numberbFloat = parseFloat(numberb);
console.log(Math.round(numberbFloat)); //4

let string = "python jargon";
console.log(string.includes("on")); //5

let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes("jargon")); //6

let num_a = Math.floor(Math.random() * 101);
console.log(num_a); //7

let num_b = Math.floor(Math.random() * 51) + 50;
console.log(num_b); //8

let num_c = Math.floor(Math.random() * 256);
console.log(num_c); //9

let string2 = "JavaScript";
console.log(string2.charAt(Math.floor(Math.random() * 11))); //10

console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125"); //11

let string3 = "You cannot end a sentence with because because because is a conjunction";
console.log(string3.substr(30, 24)); //12
