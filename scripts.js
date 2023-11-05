function openTab404() {
  window.open("404.html");
}

function validateLoginForm() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let tempEmail = email.toLowerCase();

  if (tempEmail == "test@test.com" && password == "1234") {
    window.open("404.html");
  } else {
    alert("Unsuccessful Login !");
  }
}
