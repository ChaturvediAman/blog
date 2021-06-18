//For responsive nav-bar menu
const toggleButton=document.getElementsByClassName('toggle-button')[0];
const navbarLinks=document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active');
});

const link_about=document.getElementById("about");
const link_feedback=document.getElementById("feedback");
const link_contact=document.getElementById("contact");

const about=document.querySelector(".about")
const feedback=document.querySelector(".feedback")
const contact=document.querySelector(".contact")

const outerBox=document.getElementById("outer");

link_about.addEventListener("click",function(){
    outerBox.style.display="flex";
    about.style.display="flex";
    feedback.style.display="none";
    contact.style.display="none";
})
link_feedback.addEventListener("click",function(){
    outerBox.style.display="flex";
    about.style.display="none";
    feedback.style.display="flex";
    contact.style.display="none";
})
link_contact.addEventListener("click",function(){
    outerBox.style.display="flex";
    about.style.display="none";
    feedback.style.display="none";
    contact.style.display="flex";
})

//Close button
const close=document.querySelector(".close");
close.addEventListener("click",function(){
    
    outerBox.style.display="none";
});