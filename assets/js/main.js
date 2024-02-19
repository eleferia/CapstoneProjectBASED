/**
  ---------=====- BACK TO TOP BUTTON -=====----------
  */
let mybutton = document.getElementById("backTotop");
      
window.onscroll = function() {scrollFunction()};
      
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
      
function backTotopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/**---------=====- END BACK TO TOP BUTTON -=====----------*/


 /**
  ---------=====- NAVBAR LINKS ACTIVE ON SCROLL -=====----------
  */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
/**---------=====- END NAVBAR LINKS ACTIVE ON SCROLL -=====----------*/