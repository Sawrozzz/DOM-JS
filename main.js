 var s = document.querySelector("h1")
 

 var btn = document.querySelector("button")
 btn.style.cursor = "pointer"

//console.log(s);

// s.innerHTML = "This is changed"

// s.style.color = "red"

btn.addEventListener("click", function(){
      s.innerHTML = " I am changed by clicking"
   
   
})