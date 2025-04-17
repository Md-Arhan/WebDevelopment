let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function(e) {
   
     if(e.target.nodeName == "BUTTON"){
        let listItem = e.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("delete");
     }
})


/*document.querySelectorAll(".delete") only selects buttons that already exist in the DOM at the time the script runs.

So when you add new list items dynamically (after the page has loaded), they aren’t included in that original selection.

That means your new delete buttons never get the click event listener attached.

 */
// let delBtns = document.querySelectorAll(".delete");
// for (let delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }we cant delete 