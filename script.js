function myFunction() {
  var x = document.querySelector("nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let range = document.getElementById("ocena");
let ocenaWartosc = document.getElementById("ocenaWartosc");
ocenaWartosc.innerHTML = range.value;

range.oninput = function() {
    ocenaWartosc.innerHTML = this.value;
}