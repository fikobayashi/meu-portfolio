// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("termos");
var btn2 = document.getElementById("privacidade");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
var span1 = span[0];
var span2 = span[1];
console.log(span);


// When the user clicks the button, open the modal 
btn.onclick = function(event) {
  event.preventDefault();
  modal.style.display = "block";
}

btn2.onclick = function(event) {
  event.preventDefault();
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  }
  
  // } else {
  //   modal2.style.display = "none";
  // }
}