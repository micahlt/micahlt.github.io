let root = document.documentElement;
if (!localStorage.getItem("darkmode")) {
  localStorage.setItem("darkmode", "false");
} else {
  if (localStorage.getItem("darkmode") == "true") {
    root.style.setProperty("--text-primary", "#fff");
    root.style.setProperty("--bg-primary", "#001219");
    root.style.setProperty("--bg-secondary", "#021c26")
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