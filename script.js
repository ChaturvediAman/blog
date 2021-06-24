//For responsive nav-bar menu
const toggleButton=document.getElementsByClassName('toggle-button')[0];
const navbarLinks=document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active');
});

const links=document.querySelector(".links");
const about=document.getElementById("about");
const aboutContent=document.querySelector(".about");
console.log(about);
about.addEventListener("click",()=>{
    aboutContent.style.display="flex";
});

const close=document.querySelector(".close")
close.addEventListener("click",()=>{
    aboutContent.style.display="none";
});