

//  21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"

let x = "John";
let y = "Doe";
console.log(`${x} <> ${y}`);

//  22) Create an object with properties such name, surname, email

const me = {
  name: "Emanuele",
  surname: "Furlani",
  email: "emanuelefurlani.go@gmail.com",
};

//  23) Delete Email from the previously created object
delete me.email;

//  24) Create an array with 10 strings in it

const arr = [
  "car1",
  "car2",
  "car3",
  "car4",
  "car5",
  "car6",
  "car7",
  "car8",
  "car9",
  "car10",
];

//  25) Print in the console every string in the previous array
for (let array of arr) {
  console.log(array);
}

//  26) Create an array with 100 random numbers in it

const numArr = [];
for (let i = 0; i < 101; i++) {
  numArr.push(Math.floor(Math.random() * 1000));
}
console.log(numArr);

//  27) Wrote a function to get the MAX and the MIN from the previously created array
const maxy = numArr.reduce((a, b) => (a > b ? a : b));
console.log(maxy);
const miny = numArr.reduce((a, b) => (a < b ? a : b));
console.log(miny);

//  28) Create an array of arrays, in which every array has 10 random numbers

//  29) Create a function that gets 2 arrays and returns the longest one

function whichIsLonger(arr1, arr2) {
  return arr1.length > arr2.length ? arr1 : arr2;
}
console.log(whichIsLonger([2, 22, 221, 3], ["23332", 33, false]));

//  30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

function whoGreater(arr1, arr2) {
  const arr1Max = arr1.reduce((a, b) => (a += b));
  const arr2Max = arr2.reduce((a, b) => (a += b));
  return arr1Max > arr2Max ? arr1Max : arr2Max;
}
console.log(whoGreater([2, 23, 43, 2], [1, 3, 10]));

//  31) Get element with ID "container" from the page

const containerId = document.getElementById("container")

//  33) Create a cycle that prints the text inside every td of the page

//  34) Write a function to change the heading of the page

const changeHeading = function() {
    let element = document.getElementsByTagName("h2")[0]
    element.classList.toggle("h2style")
}

//  35) Write a function to add an extra row to the table

const addExtraRow = function(content) {
    const extraRow = document.getElementById("tr")
    extraRow.innerHTML =`<td>${content}</td>`}
    //addExtraRow("new row")

//  36) Write a function to add the class "test" to each row in the table

const addNewClass = function() {
    const addTest =document.querySelectorAll("td")
    addTest.classList.add("test")
}
//addNewClass()

//  37) Write a function to add a red background to every link in the page

const paintItRed = function () {
const x = document.querySelectorAll("a");
x.forEach((y) => {y.classList.add("test1");
});
};
//paintItRed();

//38) Console log "Page loaded" when the page is correctly loaded

//window.onload(alert("Page loaded"))
window.onload = function () {
    alert("Page loaded");
  };

//39) Write a function to add new items to a UL

const addToUl = function (content) {
    const ul = document.querySelectorAll("ul")[0];
    ul.innerHTML += `<li>${content}</li>`;
  };
  //addToUl("new item");

  //40) Write a function to empty a list -->
  
  let arrList = [1, 2, 3 ,4];
  function empty() {
      arrList.length = 0
  }