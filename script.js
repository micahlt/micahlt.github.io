var optionTwo = {
  strings: ["^1000", "- Graphic Designer - ^2000", "- Musician - ^2000", "- Blogger - ^2000",  "- Web Developer - ^2000"],
  typeSpeed: 70
};
var typedAgain = new Typed('h2', optionTwo);

function hideModal() {
  document.getElementById("modal").style.display= "none";
  document.getElementById("modalBg").style.display = "none";
  document.getElementById("modal").style.opacity = "0";
  document.getElementById("modalBg").style.opacity = "0";
}

function showModal() {
  document.getElementById("modal").style.display= "block";
  document.getElementById("modalBg").style.display = "block";
  document.getElementById("modal").style.opacity = "1";
  document.getElementById("modalBg").style.opacity = "1";
}

document.getElementById("modalBg").addEventListener("click", function() {hideModal();});

document.getElementById("banner-close").addEventListener("click", function() {
  document.getElementById("covid-banner").style.opacity = "0";
})