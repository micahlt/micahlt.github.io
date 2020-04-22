let root = document.documentElement;
if (!localStorage.getItem("darkmode")) {
  localStorage.setItem("darkmode", "false");
} else {
  if (localStorage.getItem("darkmode") == "true") {
    root.style.setProperty("--text-primary", "#fff");
    root.style.setProperty("--bg-primary", "#212121");
    root.style.setProperty("--image-shadow", "0 0 60px rgba(0, 0, 0, 0.7)");
    root.style.setProperty("--bg-secondary", "#292929")
  }
}
document.getElementById('darkmode').addEventListener("click", function() {
  if (localStorage.getItem("darkmode") == "true") {
    localStorage.setItem("darkmode", "false");
    window.location.reload();
  } else {
    localStorage.setItem("darkmode", "true");
    window.location.reload();
  }
})
