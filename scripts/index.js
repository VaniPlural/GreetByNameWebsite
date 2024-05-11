
"use strict";

// A function to show a greeting
function greetUserBtn() {
   
   let nameField = document.getElementById("nameField").value;
   let messageDiv=document.getElementById("messageDiv");
   
   let message ="Hello  " + nameField +  " Here! ";
   messageDiv.innerHTML = message;

   

}  
window.onload = init; 

function init(){
  let greetBtn = document.getElementById("greetUserBtn");
  
  greetBtn.onclick = greetUserBtn
  

}

 




