// Get elements
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme') || 'dark-mode'; // Changed from 'light-mode'
body.classList.add(savedTheme);
updateIcon(savedTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';

    // Update the class on the body
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(newTheme);

    // Update the icon
    updateIcon(newTheme);

    // Save the preference to localStorage
    localStorage.setItem('theme', newTheme);
});

// Function to update the toggle button icon
function updateIcon(theme) {
    themeIcon.textContent = theme === 'light-mode' ? '🌙' : '☀️';
}
