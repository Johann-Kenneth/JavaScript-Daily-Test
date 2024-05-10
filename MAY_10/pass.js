var password=document.getElementById("inputPassword")
var red=document.getElementById("red")
var yellow=document.getElementById("yellow")
var green=document.getElementById("green")
var text=document.getElementById("strengthText")
// var uppercase= /[A-Z]/.test(password)
// var numbers=
function passType(){
if(password.value.length<8){
    text.textContent="Password is weak"
    red.style.background="red"
    // yellow.style.background="orange"
    text.style.color="red"

   }
   else{
    red.style.background="rgb(157, 153, 153)"
    yellow.style.background="rgb(157, 153, 153)"
    text.textContent=""
   }
   if(password.value.length>8){
    text.textContent="Password is medium"
    red.style.background="red"
    yellow.style.background="orange"
    text.style.color="orange"

   }
   else{
    red.style.background="rgb(157, 153, 153)"
    yellow.style.background="rgb(157, 153, 153)"
    text.textContent=""
   }
}