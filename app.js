const accordionHeader = document.querySelector(".accordion-header");
const accordionSign = document.querySelector(".accordion-sign");
const accordionBody = document.querySelector(".accordion-body");
accordionHeader.addEventListener("click", function() {
  if (accordionBody.style.display === "block") {
    accordionBody.style.display = "none";
    accordionSign.innerHTML = "&#43;";
  } else {
    accordionBody.style.display = "block";
    accordionSign.innerHTML = "&#8722;";
  }
});