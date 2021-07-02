

//   21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe" - OK

let x = "John";
let y = "Doe";
console.log(`${x} <> ${y}`);

//   22) Create an object with properties such name, surname, email - OK

const me = {
  name: "Emanuele",
  surname: "Furlani",
  email: "emanuelefurlani.go@gmail.com",
};

//   23) Delete Email from the previously created object - OK

delete me.email;

//   24) Create an array with 10 strings in it - OK

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

//   25) Print in the console every string in the previous array - OK

for (let array of arr) {
  console.log(array);
}

//   26) Create an array with 100 random numbers in it - OK

const numArr = [];
for (let i = 0; i < 101; i++) {
  numArr.push(Math.floor(Math.random() * 1000));
}
console.log(numArr);

//   27) Wrote a function to get the MAX and the MIN from the previously created array - OK

const maxy = numArr.reduce((a, b) => (a > b ? a : b));
console.log(maxy);
const miny = numArr.reduce((a, b) => (a < b ? a : b));
console.log(miny);

//   28) Create an array of arrays, in which every array has 10 random numbers - NOTCOMPLETED

//   29) Create a function that gets 2 arrays and returns the longest one - OK

function whichIsLonger(array1, array2) {
  return array1.length > array2.length ? array1 : array2;
}
console.log(whichIsLonger([2, 22, 221, 3], ["23332", 33, false]));

//   30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values - OK

function whoGreater(arr1, arr2) {
  const arr1Maxy = arr1.reduce((a, b) => (a += b));
  const arr2Maxy = arr2.reduce((a, b) => (a += b));
  return arr1Maxy > arr2Maxy ? arr1Maxy : arr2Maxy;
}
console.log(whoGreater([2, 23, 43, 2], [1, 3, 10, 30, 30]));

//   31) Get element with ID "container" from the page - OK

const containerId = document.getElementById("container")

//   32) Get every "td" from the page - OK

const tds = document.getElementsByTagName("td");

//   33) Create a cycle that prints the text inside every td of the page - NOTWORKING

function addTextToTD() {
    const tds = document.getElementsByTagName("td");
    for (let td of tds) {
      let p = document.createElement("p");
      p.innerText = "I am a new text";
      td.appendChild(p);
    }
  }

//   34) Write a function to change the heading of the page - OK

const changeHeading = function() {
    let element = document.getElementsByTagName("h2")[0]
    element.classList.toggle("h2style")
}

//   35) Write a function to add an extra row to the table - NOTWORKINGFINE

const addExtraRow = function(content) {
    const extraRow = document.getElementById("tr")
    extraRow.innerHTML =`<td>${content}</td>`}
//addExtraRow("new row")

//   36) Write a function to add the class "test" to each row in the table - NOTWORKING

const addNewClass = function() {
    const addTest =document.querySelectorAll("td")
    addTest.classList.add("test")
}
//addNewClass()

//   37) Write a function to add a red background to every link in the page - OK

const paintItRed = function () {
const x = document.querySelectorAll("a");
x.forEach((y) => {y.classList.add("test1");
});
};
//paintItRed();

//   38) Console log "Page loaded" when the page is correctly loaded - OK

//window.onload(alert("Page loaded"))
window.onload = function () {
    alert("Page loaded");
  };

//   39) Write a function to add new items to a UL - OK 

const addToUl = function (content) {
    const ul = document.querySelectorAll("ul")[0];
    ul.innerHTML += `<li>${content}</li>`;
  };
  //addToUl("new item");

//   40) Write a function to empty a list - OK

  const emptyList = function() {
    const ule = document.getElementById("empty")
    ule.innerHTML = "";
  }
  //emptyList()