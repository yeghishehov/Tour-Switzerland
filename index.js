const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalFooter = document.querySelector(".modal-footer");
const modalEnd = document.querySelector(".modal-end");
const buttons = document.querySelectorAll(".lernButton");
const buukingButtons = document.querySelector(".bookingButton");
const confirmButton = document.querySelector(".confirmButton");
const okButton = document.querySelector(".okButton");
const inputs = document.querySelectorAll(".input");

buttons.forEach(button => {
    button.onclick = function() {
        modal.style.display = "block";
    }
})
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
buukingButtons.onclick = function() {
    modalFooter.style.display === "block"
        ? modalFooter.style.display = "none"
        : modalFooter.style.display = "block";
    modal.scrollTo(0,modal.scrollHeight);
}
confirmButton.onclick = function() {
    let allowConfirm = true
    inputs.forEach(input => {
        if(input.value.length === 0) 
        allowConfirm = false}
        );
    if(allowConfirm) {
        modalEnd.style.display = "flex";
        modalContent.style.display = "none";
    }
}
okButton.onclick = function() {
    modal.style.display = "none";
    modalEnd.style.display = "none";
    modalContent.style.display = "block";
    modalFooter.style.display = "none"
}