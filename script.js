document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("loginButton");
  button.addEventListener("mouseenter", function () {
    button.textContent = "Log In to Aeoculus";
    button.style.backgroundColor = "#03218b";
  });
  button.addEventListener("mouseleave", function () {
    button.textContent = "Log In";
    button.style.backgroundColor = "#3d67ff";
  });
});
