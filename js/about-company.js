var elBtn = document.querySelector(".js-modal");
var elCloseBtn = document.querySelector(".modal-close");
var elModal = document.querySelector(".modal");


elBtn.addEventListener("click", function() {
  elModal.classList.add("modal-open");
  // elModal.style.display = "flex";
});

elCloseBtn.addEventListener("click", function() {
  elModal.classList.remove("modal-open");
});

window.onclick = function(e) {
  // console.log(e.target)
  if(e.target == elModal){
    elModal.classList.remove("modal-open");
  }
};
