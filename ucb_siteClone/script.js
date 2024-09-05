let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");
let navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () =>{
  navLinks.classList.add("active");
}
closeBtn.onclick = () =>{
  navLinks.classList.remove("active");
}

