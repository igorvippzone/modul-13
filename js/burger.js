
  document.addEventListener('DOMContentLoaded', function(){

let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav__list");
console.log(nav)
burger.addEventListener("click",()=>{

  if(!nav.classList.contains("active")){
    nav.classList.add("active")
  } else{
    nav.classList.remove("active")
  }
  
})
  })
