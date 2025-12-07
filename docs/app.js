document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const body = document.body;
    const toggleButton = document.getElementById('mode-toggle');

    const currentMode = localStorage.getItem('colorMode');
    if (currentMode === 'light') {
        body.classList.add('light-mode');
        toggleButton.textContent = 'Switch to Dark Mode 🌙';
    }

    toggleButton.addEventListener('click', () => {
        // Toggle the 'light-mode' class on the body
        html.classList.toggle('light-mode');
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');

        if (isLightMode) {
            toggleButton.textContent = 'Switch to Dark Mode 🌙';
            localStorage.setItem('colorMode', 'light');
        } else {
            toggleButton.textContent = 'Switch to Light Mode ☀️';
            localStorage.setItem('colorMode', 'dark');
        }
    });
});