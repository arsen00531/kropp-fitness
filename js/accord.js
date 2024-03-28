const boxes = Array.from(document.querySelectorAll(".box"));

boxes.forEach((box) => {
  box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
  e.preventDefault(); 
  const currentBox = e.target.closest(".box");
  const currentContent = e.target.nextElementSibling;
  currentBox.classList.toggle("active");
  if (currentBox.classList.contains("active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  } else {
    currentContent.style.maxHeight = 0;
  }
}