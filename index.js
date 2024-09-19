// javascript

//document.getElementById("count").innerText = 5;
//initialize the count as 0
//listen for clicks on the increment button 
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
//let resetEl = document.getElementById("reset-btn");
console.log(countEl);
let count = 0;
function increment(){
    count += 1;
    countEl.innerText = count;
    console.log(count);
}
//increment();
function save(){
   //create a variable that has the count and the dash separator
   //render the variable in the saveEl using innertext
   // make sure you dont delete the existing content 
   let countStr = count + " - ";
   saveEl.textContent += countStr;
   countEl.textContent = 0;
   count = 0;
   
}
//Google:
//innerText alternative mdn
