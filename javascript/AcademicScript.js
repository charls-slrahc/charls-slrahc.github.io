const infoTexts = [
  "Across seven different schools, Stanford’s graduate programs allow students to study in around 150 programs and 18 postbaccalaureate degrees. The presence of around 10,000 graduate students at Stanford helps to highlight the university’s focus on pursuing numerous careers, excellent research, and excellence in academic standards, helping students become leaders in academia, industry, government, and more (stanford.edu).",
  "Stanford's undergraduate programs let students pick from 66 different majors, giving them lots of chances to explore different subjects and learn what connects them all. With around 7,550 students, the university creates a busy learning environment where students learn from excellent teachers, get chances to do research, and join global experiences, which helps them think clearly, be creative, and become leaders in lots of different areas (stanford.edu).",
  "Stanford provides additional programs beside degrees, such as programs for young people in STEM, an online school for teens, internships, and classes on parenting. Adults are able to study and grow both their skills and knowledge using flexible learning options. They are part of Stanford’s effort to encourage continuous learning, community involvement, and give more people the opportunity to learn (stanford.edu).",
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