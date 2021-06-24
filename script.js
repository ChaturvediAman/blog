//For responsive nav-bar menu
const toggleButton=document.getElementsByClassName('toggle-button')[0];
const navbarLinks=document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active');
});

const contact=document.getElementById("about");
const contact_content=document.querySelector(".contact");
contact.addEventListener("click",function(){
    
});