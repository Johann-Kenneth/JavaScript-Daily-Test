var display=document.getElementById("display-area")
var counting=document.getElementById("count-area")
var count=0
// var button=document.getElementById("buttons")
// var click=document.getElementById("click")
// var red=document.getElementById("red")
// var blue=document.getElementById("blue")
function click(){
    count=count+1
    counting.textContent="count = " + count++
    
    if(count%2==0){
        display.style.height="50px"
        display.style.width="50px"
    }
    else if(count%5==0){
        display.style.height="50px"
        display.style.width="150px"
        // display.style.border-radius="20px"
    }
    else{
        display.style.height="50px"
        display.style.width="200px"
    }
    
}
function red(){
 display.style.background="red"
}
function blue(){
 display.style.background="blue"
}
function reset(){
    display.style.background="black"
}
