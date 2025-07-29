document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Thanks for reaching out!";
  this.reset();
});
