// let jsonRes =
//   '{"fact":"Neutering a cat extends its life span by two or three years.","length":60}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// //converting json object to json data
// let student = {
//   student: "arhan",
//   marks: 13,
// };

// let data = JSON.stringify(student);
// console.log(data);

//http Headers
/* What are HTTP Headers?
HTTP headers are key-value pairs sent between client and server in an HTTP request or response. They provide meta-information — like content type, authentication, caching rules, and more. 
 
  
   Header	          Purpose
Content-Type	Describes the type of data (application/json)
Authorization	Used for sending tokens (Bearer <token>)
Accept	        Tells server what formats are acceptable
User-Agent	    Info about the client (browser/device)
Cookie	        Sends stored cookies
Cache-Control	Controls caching behavior
*/




//fetch 

// let url = `https://catfact.ninja/fact`;
// fetch(url).then((res) => {
//     // console.log(res.json())
//     console.log(res);
//     res.json().then( (data) => {
//         console.log(data);
//     } )
// }).catch((err) =>{
//     console.log(err)
// })

// fetch(url).then((res) => {
//     console.log(res);
//     return res.json();
// }).then((data) => {
//     console.log(data);
//     return fetch(url);
// }).then((res) => {
//     return res.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) =>{
//     console.log(err)
// })


// console.log("hii")


//async await

// async function dem(){
//     try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(res)
//     console.log(data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact)
//     } catch (error) {
//         console.log(error)
//     }

//     console.log("bye")
// }




//axios

// async function getFetch() {
//   try{
//     let res = await axios.get(url);
//     console.log(res.data.fact);
//   }catch(e){
//     console.log(e)
//   }
// }

// let btn = document.querySelector("button");
// let url2 = `https://dog.ceo/api/breeds/image/random`;

// async function getfacts() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (error) {
//     console.log(error);
//     return "No fact found";
//   }
// }


// btn.addEventListener("click", async () => {
//   let fact = await getfacts();
//   console.log(fact)
//   let p = document.querySelector("#fact");
//   p.innerText = fact;
  
// })

// async function getfacts() {
//   try {
//     let res = await axios.get(url2);
//     return res.data.message;
//   } catch (error) {
//     console.log(error);
//     return "No image found";
//   }
// }

// btn.addEventListener("click", async () => {
//   let fact = await getfacts();
//   console.log(fact)
//   // let p = document.querySelector("#fact");
//   // p.innerText = fact;
//   let img = document.querySelector("#img");
//   img.setAttribute("src", fact);
  
// })



//Sending headers 

// const url = `https://icanhazdadjoke.com/`

// async function getjokes() {
//   try {
//     const config = {headers : {Accept : "application/json"}};
//     let res = await axios.get(url, config);
//     console.log(res.data);
//   } catch (error) {
//     console.log(error)
//   }
// }



//Query update

// let url = "http://universities.hipolabs.com/search?name="
// let btn = document.querySelector("button");
// let ul = document.querySelector("#list");

// btn.addEventListener("click", async () => {
//   let country = document.querySelector("input").value;
//   let data = await getColleges(country);
//   console.log(data);
//   show(data);
// });

// async function show(data){
//   ul.innerText = "";
//   for(col of data){
//     let li = document.createElement("li");
//     // console.log(col.name);
//     li.innerText = col.name;
//     ul.appendChild(li);
//   }
// }

// // let country = "nepal";

// async function getColleges(country) {
//   try {
//     let res = await axios.get(url + country);
//     console.log(res.data);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// }