// let img = document.getElementById("mainImg");
// console.dir(img);

// 'http://127.0.0.1:5500/JS_DOM/index.html'
// img.src
// 'http://127.0.0.1:5500/JS_DOM/assets/spiderman_img.png'
// img.tagName
// 'IMG'

// img.src = 
// 'http://127.0.0.1:5500/JS_DOM/assets/creation_1.png'
// 'http://127.0.0.1:5500/JS_DOM/assets/creation_1.png'




// console.dir(document.getElementById("description").innerHTML)



//getElementByClassName

// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++){
//     smallImages[i].src = "assets/spideman_img.png";
//     console.log(`value of index ${i} , is changed`)
//     console.dir(smallImages[i].src);
// }

// document.getElementsByClassName("sas");
// //if the given class name is not defined then it will return HTML collection where length is 0;


//getElementByTagName

// document.getElementsByTagName("p");
// document.getElementsByTagName("p")[1].innerText = "abc";
// document.getElementsByTagName("span");
// // HTMLCollection [] its gives you empty 



//Query Selector 

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// // console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll(".oldImg"));


// console.dir(document.querySelector("div a"));


// //All

// console.dir(document.querySelectorAll("div a"));   // we will get a NodeList of all the anchor tags


//Using properties and methods

// let para = document.querySelector("p");

// console.dir(para);
// console.log(para.innerHTML);
// console.log(para.innerText);
// console.log(para.textContent);

// para.innerText = "abc";

// para.innerHTML = "Hi <b> how are you <b>!";  //it will display you in the bold format, it is not possible in innerText

// para.innerHTML = ` hi ${para.innerText}, how are you `;



//Manipulating Attribute

// let img = document.querySelector("img");

// img.getAttribute('id');
// img.setAttribute('id', 'spiderman-img');


//Manipulating heading

// let heading  = document.querySelector('h1');
// console.dir(heading);
// heading.style.color = "red";


// let links  = document.querySelectorAll(".box a");

// for(let i=0; i<links.length; i++){
//     links[i].style.color = 'yellow';  //inline style
// }



// let img = document.querySelector("img");
// img.classList;
// img.classList.add("abc")
// img.classList.add("cde")
// img.classList.remove("cde");
// img.classList.add("cde");
// img.classList.contains('abc');

// img.classList.toggle("abc"); //false bcz toggle removes abc


//Navigation

// let h4 = document.querySelector('h4');
// h4.parentElement; // parent of h4 prints
// h4.children; //0 if no childrens

// let box = document.querySelector(".box");
// box.children;
// box.childElementCount;


// let ul = document.querySelector('ul');
// ul.previousElementSibling;
// ul.nextElementSibling;
// ul.children
// // HTMLCollection(3) [li, li, li]
// ul.children[0];
// ul.children[1].previousElementSibling; 
// ul.children[1].previousElementSibling.style.color = red; 


//Adding element

// let newP = document.createElement('p');
// console.dir(newP);
// newP.innerText = "Hi how are you"
// let body = document.querySelector('body');
// body.appendChild(newP);

// let box = document.querySelector(".box");
// box.appendChild(newP);  appending for it children


// p
// newP
// <p>​Hi how are you​</p>​
// newP.ape
// undefined
// newP.append("hii")  //appending for actual para

  
// let p = document.querySelector('p');
// let btn = document.createElement("button");
// btn.innerHTML = "NEW BUTTON";
// p.insertAdjacentElement("beforebegin", btn);
// p.insertAdjacentElement("beforeend", btn);



// //Rmove Element

// let body = document.querySelector('body');
// body.removeChild('btn');
// p.remove();
// body.remove();




// //Assignment 

// let para = document.createElement('p');
// para.innerText = "Hi im arhan";
// let body = document.querySelector('body');
// body.append(para);

// para.append("hi");  //appending in the same line same para



// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let p = document.createElement('p');

// h1.innerText = "Im in a div";
// p.innerText = "Me too"

// div.appendChild(h1);
// div.appendChild(p);

// div.classList.add("box");

// document.querySelector('body').prepend(div);




//DOM Events

