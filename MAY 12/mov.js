var Genre= document.getElementById("Genre").
addEventListener("change", function(){
    var v1=this.value 
    var mov=document.getElementById("movies")

  mov.forEach(function(movies){
  if(v1===""){
    mov.style.display="block";
  }
  else if(movies.id===v1){
    mov.style.display="block"
  }
  else{
    mov.style.display="none"
  }
  })

})