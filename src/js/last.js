import '../css/style.css';
import '../css/last.css';
import '../css/reset.css';


const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const response = document.getElementById('response');
const mwahButton = document.getElementById('mwah-button');
const kissesContainer = document.getElementById('kisses-container');

let noButtonPosition = { top: 0, left: 0 };

function getRandomPosition() {
  const maxTop = window.innerHeight - noButton.offsetHeight;
  const maxLeft = window.innerWidth - noButton.offsetWidth;
  return {
    top: Math.floor(Math.random() * maxTop),
    left: Math.floor(Math.random() * maxLeft),
  };
}

noButton.addEventListener('mouseover', () => {
  noButtonPosition = getRandomPosition();
  noButton.style.position = 'absolute';
  noButton.style.top = `${noButtonPosition.top}px`;
  noButton.style.left = `${noButtonPosition.left}px`;
});

yesButton.addEventListener('click', () => {
  // Display the success message when "Yes" is clicked
  response.textContent = 'ПХПХПХПХХП Я ТЕБЯ ТОЖЕ ЛЮБЛЮЮЮЮ';
  // Show the "MWAH" button after "Yes" is clicked
  mwahButton.style.display = 'inline-block';
});

noButton.addEventListener('click', () => {
  response.textContent = ''; // Remove any message if "No" is clicked
});

// Function to create kisses animation
function createKisses() {
  const kiss = document.createElement('div');
  kiss.textContent = '😘';
  kiss.classList.add('kiss');
  
  // Random position for each kiss
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  
  kiss.style.left = `${randomX}px`;
  kiss.style.top = `${randomY}px`;
  
  kissesContainer.appendChild(kiss);
  
  // Remove kiss after animation ends
  setTimeout(() => {
    kiss.remove();
  }, 2000); // Matches the animation duration
}

mwahButton.addEventListener('click', () => {
  // Create multiple kisses when the "MWAH" button is clicked
  for (let i = 0; i < 10; i++) {
    setTimeout(createKisses, i * 300); // Delay each kiss for effect
  }
});
