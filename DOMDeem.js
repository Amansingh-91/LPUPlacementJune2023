// // DOM => Document Object Model;
// // There are multiple ways to select any object/element on dom

// // will select the first h1 in document
// // const dom = document.querySelector("h1");

// // will select the h1 with id of "one"
// const dom = document.querySelector("#myfav");

// console.log(dom);

// // selecting multiple element
// // return NodeList
// const allHOne = document.querySelectorAll(".myclass");

// console.log(allHOne);

// // allHOne.forEach((h,index)=>{
// //     h.innerText = `${index+1} h1`;
// // });

// // select element using tagname
// // return HTMLCollection
// // const hOnes = document.getElementsByTagName("h1"); 
// // // change this to array
// // const arrOfHOnes = Array.from(hOnes);

// // console.log(hOnes,arrOfHOnes);

// // select element using Id

// const p = document.getElementById("myfav");
// console.log(p);

// // select element using class name

// const allEleOfSameClass  =  document.getElementsByClassName("myclass");

// console.log(allEleOfSameClass);

// Adding and removing content in elements

// Steps
// 1st ) select the element using document selector

const para =document.querySelector("p");
console.log(para);

// you can add or remove the content of the element using the inbuilt properties of the selected element

// if you are working with the text
console.log(para.innerText);

console.log("text content property");
console.log(para.textContent);

// replace the content

// para.textContent += " Replaced text";

// adding css properties

para.style.color = "green";
para.style.fontSize = "24px"

const span = document.querySelector("span");
console.log(span);
span.style.display = "inline";

// adding and removing html elements

// create the html element
const p = document.createElement("p");
p.textContent = "Newly added Element";

// select the element where you need to append this new element

const div = document.querySelector("div");

div.appendChild(p);

// remove the element 
// select the element and then user documnet.removeElement

const body = document.querySelector("body");
body.removeChild(para);