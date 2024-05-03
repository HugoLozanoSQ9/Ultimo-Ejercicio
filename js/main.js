let token = localStorage.getItem("user");


token
  ? window.open("../views/catalogo.html", "_self")
  : window.open("../views/logIn.html", "_self");

//console.log(token)