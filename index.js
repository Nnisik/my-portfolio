// Theme switching
const themeSwitchBtn = document.getElementById('theme-switch-btn');
themeSwitchBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
});