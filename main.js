// Change the hero text dynamically
function changeHeroText() {
  const text = document.getElementById('hero-text');
  text.textContent = "✨ The text has been changed dynamically with JavaScript!";
}

// Show an alert with a custom message
function showAlert(message) {
  alert(message);
}

// Change card background color randomly
function changeCardColor(button) {
  const card = button.parentElement;
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  card.style.backgroundColor = randomColor;
}

// Animate card by scaling it
function animateCard(button) {
  const card = button.parentElement;
  card.style.transition = "transform 0.3s";
  card.style.transform = "scale(1.1)";
  
  // Reset scale after animation
  setTimeout(() => {
    card.style.transform = "scale(1)";
  }, 300);
}

// Extra: print something to console when page loads
window.addEventListener('DOMContentLoaded', () => {
  console.log("Page loaded successfully!");
});
