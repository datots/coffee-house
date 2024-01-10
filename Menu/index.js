var modal = document.getElementById("productModal");
var closeBtn = document.getElementsByClassName("close")[0];

// Add click event listeners to each preview card
var cards = document.querySelectorAll(".preview-card");
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    var cardContent = card.innerHTML;
    document.getElementById("modalContent").innerHTML = cardContent;
    modal.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
