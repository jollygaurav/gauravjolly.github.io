var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


function contactUsBlock(item,color){
  var phoneText="Just a Call Away At +91-8745059424";
  document.getElementById("contact_text").innerHTML=phoneText;
  document.getElementById("contact_text").style.display = "block";
  document.getElementById("contact_text").style.color="red";
  // document.getElementById("_linkedin").style.backgroundColor="skyblue";
  document.getElementById(item).style.color=color;
  
}
function contactUsHide(item){
  document.getElementById("contact_text").style.display = "none";
 document.getElementById(item).style.color="black";
 // document.getElementById("_linkedin").style.backgroundColor="white";
}




