const infoTexts = [
  "This is more information about the first box. You can customize this content.",
  "This is more information about the second box. Add more detail here.",
  "Here is the content for the third red box. Edit as needed."
];

let currentArrow = null;

function showInfo(index) {
  const box = document.getElementById("infoBox");
  const text = document.getElementById("infoText");
  box.style.display = "block";
  text.textContent = infoTexts[index];

  // Remove 'down' and 'up' from all arrow buttons
  for (let i = 0; i < infoTexts.length; i++) {
    document.getElementById(`arrow-btn-${i}`).classList.remove('down', 'up');
  }
  // Add 'down' to the clicked arrow
  document.getElementById(`arrow-btn-${index}`).classList.add('down');
  currentArrow = index;
}

function closeInfo() {
  document.getElementById("infoBox").style.display = "none";
  // Rotate the last opened arrow up
  if (currentArrow !== null) {
    document.getElementById(`arrow-btn-${currentArrow}`).classList.remove('down');
    document.getElementById(`arrow-btn-${currentArrow}`).classList.add('up');
    setTimeout(() => {
      // Remove the 'up' class after the animation
      if (currentArrow !== null) {
        document.getElementById(`arrow-btn-${currentArrow}`).classList.remove('up');
        currentArrow = null;
      }
    }, 200); // Match the CSS transition duration
  }
}