// Disable right-click, text selection, and copy-pasting
document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === 'c' || event.key === 'v' || event.key === 'x')) {
        event.preventDefault();
    }
});

document.addEventListener('selectstart', event => event.preventDefault());

const textareas = document.querySelectorAll('textarea');
textareas.forEach(textarea => {
    textarea.addEventListener('paste', event => event.preventDefault());
    textarea.addEventListener('copy', event => event.preventDefault());
    textarea.addEventListener('cut', event => event.preventDefault());
});

// Function to change theme with smooth transitions
function changeTheme(theme) {
    const body = document.body;

    // Remove existing theme classes
    const themes = ['theme-light', 'theme-dark', 'theme-autumn'];
    themes.forEach(existingTheme => body.classList.remove(existingTheme));

    // Add the selected theme class
    body.classList.add(`theme-${theme}`);

    // Store the selected theme in localStorage
    localStorage.setItem('theme', theme);
}

// Apply theme on page load
window.onload = function () {
    const theme = localStorage.getItem('theme') || 'light'; // Default theme
    document.body.classList.add(`theme-${theme}`);
};
