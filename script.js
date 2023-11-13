// script.js
function toggleAccessibilityWindow() {
  const accessibilityWindow = document.getElementById("accessibilityWindow");
  accessibilityWindow.style.display =
    accessibilityWindow.style.display === "none" ? "block" : "none";
}

function changePosition() {
  const accessibilityWindow = document.getElementById("accessibilityWindow");

  //move the window to the left on each click
  const currentRight = parseInt(accessibilityWindow.style.right) || 20;
  accessibilityWindow.style.right = currentRight + 20 + "px";
}

function changeLanguage() {
  //alert that the language has changed
  alert("Language changed!");
}

function toggleButtons() {
  // toggle buttons logic
  // toggle the color of the buttons
  const buttons = document.querySelectorAll(".adjustment-section button");

  buttons.forEach((button) => {
    const currentColor = button.style.backgroundColor || "#007BFF";
    const targetColor = currentColor === "#007BFF" ? "#28A745" : "#007BFF";
    button.style.backgroundColor = targetColor;
  });
}

function resetSettings() {
  //reset settings logic
  alert("Settings reset!");
}

function searchFieldInput(value) {
  //search field logic
  console.log("Search:", value);
}
