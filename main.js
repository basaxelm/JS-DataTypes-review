// Lv 1

let challenge = "JavaScript Review"; //1

console.log(challenge); //2
console.log(challenge.length); //3

console.log(challenge.toUpperCase()); //4
console.log(challenge.toLowerCase()); //5

console.log(challenge.substr(0,10)); //6
console.log(challenge.substr(11,6).includes("review")); //7, 8
console.log(challenge.substr(11,6).split()); //9

console.log(challenge.split()); //10

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"; 
console.log(companies.split(",")); //11

console.log(challenge.replace("JavaScript", "CSS")); //12

console.log(challenge.charAt(15)); //13
console.log(challenge.charCodeAt("J")); //14

console.log(challenge.indexOf("Review")); //15
console.log(challenge.lastIndexOf("Review")) //16

let sentence = "You cannot end a sentence with because because because is a conjunction"; 
console.log(sentence.indexOf("because")); //17
console.log(sentence.lastIndexOf("because")); //18
console.log(sentence.search("because")); //19

console.log(challenge.trim()); //20
console.log(challenge.startsWith("JavaScript")); //21
console.log(challenge.endsWith("Review")); //22

let pattern = /a/gi;
console.log(challenge.match(pattern)); //23

let blank = "";
console.log(challenge.concat("JavaScript", "Review")); //24

console.log(challenge.repeat(2)); //25  





