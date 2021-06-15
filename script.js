//For responsive nav-bar menu
const toggleButton=document.getElementsByClassName('toggle-button')[0];
const navbarLinks=document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active');
});

//For modals
//Step-1 Get the modal
const modal=document.getElementById("modal");
//Step-2 Get the button that opens the modal
const about=document.getElementById("about");
//Step-3 Get the <span> element that closes the modal
const close=document.getElementById("close");
//Step-4 When the user clicks on the link open the modal
about.addEventListener("click",function(){
    modal.style.display="flex";
});
//Step-5 When the user clicks on the <span> close the modal
close.addEventListener("click",function(){
    modal.style.display="none";
});
//Step-6 When the user clicks anywhere outside of the box close it
