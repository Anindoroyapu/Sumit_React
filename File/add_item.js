Array.prototype.myPush = function(...a){
    this.push(a[0]);
    init();
}

const display = document.getElementById("fruits");
const button = document.querySelector("#button");

let fruits = ['mango','guava','apple', 'orange'];

const init = function(){
    document.getElementById("fruits").innerHTML = '';
    fruits.sort().forEach(fruit =>{
        let item = document.createElement("li");
        item.textContent = fruit;

        
        document.getElementById("fruits").appendChild(item);
    });
}
/*
let formValidation = () => {
    if (input.value === "") {
      msg.innerHTML = "Post cannot be blank";
      console.log("failure");
    } else {
      console.log("successs");
      msg.innerHTML = "";
    }
  };
  */

const addItem = function(){
    fruits.myPush(document.getElementById('input').value);
}
init();
