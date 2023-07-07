// Get references to the elements
const loginSection = document.querySelector('.login-section');
const signupSection = document.querySelector('.signup-section');
const loginLink = document.getElementById('loginLink');

// Add event listeners for click on login link and signup section
loginLink.addEventListener('click', showLoginSection);
signupSection.addEventListener('click', showSignupSection);

// Function to show the login section
function showLoginSection() {
  loginSection.classList.add('visible');
  signupSection.classList.remove('visible');
}

// Function to show the signup section
function showSignupSection() {
  loginSection.classList.remove('visible');
  signupSection.classList.add('visible');
}
