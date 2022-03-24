// callbacks
// bir fonksiyonun başka bir fonksiyonda parametre olarak verildiği durumlara denir.

function welcome(name) {
  console.log(`Welcome, ${name}`);
}

function greeter(callback) {
  const name = "Mu-As";
  callback(name);
}

greeter(welcome);

// sync - async callback
// Callback çalışırken default olarak sync çalışır.

// sync examples
let nums = [123, 521, 66, 533, 780, 457, 224, 43, 168];
const sortedNums = nums.sort((num1, num2) => num1 - num2);
console.log("sorted", sortedNums);
const mappedNums = sortedNums.map((num) => num * 3);
console.log("mapped", mappedNums);
const filteredNums = mappedNums.filter((num) => num % 2 === 0);
console.log("filtered", filteredNums);

// async examples
function greet(name) {
  console.log(name);
}
setTimeout(greet, 2000, "MuAs");

function cBack() {
  document.getElementById("test").innerHTML = "cBack text";
}
document.getElementById("button").addEventListener("click", callback);
