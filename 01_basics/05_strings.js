const name = "mahendra"
const repocount = 2;

// console.log(name + repocount + " value"); 

// console.log(`Hello my name is ${name} and repo count is ${repocount}`); best way for string

const gameName = new String("mahendra");
// console.log(gameName); // [String: 'mahendra']

// console.log(gameName[0]); // m
// console.log(gameName.__proto__); // {}

// console.log(gameName.length); // 8
// console.log(gameName.toUpperCase()); // MAHENDRA

// console.log(gameName.charAt(2)); // h
// console.log(gameName.indexOf('r')); // 6

const newString = gameName.substring(0, 5);
// console.log(newString); // mahen

const str2 = gameName.slice(-8, 5);
// console.log(str2); // mahen

const strwithSpace = "    space string    ";
// console.log(strwithSpace); // space     string
// console.log(strwithSpace.trim());

const url = "https://mahendra.com/mahendra%20kumar";

// console.log(url.replace('%20', '-')); //https://mahendra.com/mahendra-kumar

// console.log(url.includes('kum')); // true
// console.log(url.split('-'));
// console.log(url);



















