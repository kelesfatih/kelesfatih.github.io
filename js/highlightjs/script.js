document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.createElement('button');
    themeToggleButton.classList.add('theme-toggle-button');
    themeToggleButton.textContent = 'Switch Theme';
    document.body.appendChild(themeToggleButton);

    themeToggleButton.addEventListener('click', function () {
        document.body.classList.toggle('light-theme');
    });
});