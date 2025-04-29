document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("status").textContent = "Login Successful!";
});
