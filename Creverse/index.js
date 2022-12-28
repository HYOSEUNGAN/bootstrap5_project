console.log("working");

function darkMode() {
  const checkbox = document.getElementById("flexSwitchCheckDefault");
  const bodyElement = document.body;
  if (checkbox.checked === false) {
    bodyElement.classList.add("white-mode");
  } else {
    bodyElement.classList.remove("white-mode");
  }
}
