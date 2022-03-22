const string = "\'Love is the best thing in this world. Some found their love and some are still looking for their love.\'";
let pattern = /love/gi;
console.log(string.match(pattern)); //1

const string2 = "\'You cannot end a sentence with because because because is a conjunction\'";
let pattern2 = /because/gi;
console.log(string2.match(pattern2)); //2

let string3 = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is #Project &is al@so $the $resu@lt of &love& of tea&ching";
let pattern3 = /[%$@&#]/g;
console.log(string3.replace(pattern3, "")); //3

const string4 = "\'He earns 5000 pesos from salary per month, 10000 pesos annual bonus, 15000 pesos online courses per month.\'";
let pattern4 = /\d+/g;
let income = string4.match(pattern4);
let value1 = parseInt(income[0]);
let value2 = parseInt(income[1]);
let value3 = parseInt(income[2]);
let totalIncome = value1 + value2 + value3;
console.log(totalIncome + " " + "pesos"); //4