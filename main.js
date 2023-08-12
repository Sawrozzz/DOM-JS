 var s = document.querySelector("h1")
 

 var bt = document.querySelector("button")
 bt.style.cursor = "pointer"

//console.log(s);

// s.innerHTML = "This is changed"

// s.style.color = "red"

bt.addEventListener("click", function(){
      s.innerHTML = " I am changed by clicking"
   
   
})