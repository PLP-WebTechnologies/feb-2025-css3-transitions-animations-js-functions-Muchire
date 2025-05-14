const button = document.getElementById('moodButton');


const moodColors = ["#f8ede3", "#e0bbff", "#c1f0f6", "#ffe5b4", "#d3f8e2"];

// Load saved mood from localStorage
function applySavedMood() {
  const savedColor = localStorage.getItem('moodColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
}

// Set new mood
function setMood() {
  const randomColor = moodColors[Math.floor(Math.random() * moodColors.length)];
  document.body.style.backgroundColor = randomColor;
  localStorage.setItem('moodColor', randomColor);

  // Trigger animation
  button.classList.add('animate');
  button.addEventListener('animationend', () => {
    button.classList.remove('animate');
  }, { once: true });
}

// Add event listener to the button
button.addEventListener('click', setMood);

// change mood when the page loads
applySavedMood();
