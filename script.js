const hamburgerBtn = document.getElementById('hamburgerBtn');
const navContainer = document.querySelector('.nav-container');

// Hamburger menu (csak ha van)
if (hamburgerBtn && navContainer) {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navContainer.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navContainer.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!hamburgerBtn.contains(e.target) && !navContainer.contains(e.target)) {
            hamburgerBtn.classList.remove('active');
            navContainer.classList.remove('active');
        }
    });
}

if (localStorage.getItem('darkMode') === 'enabled') {
    document.documentElement.classList.add('dark-mode');
    document.body && document.body.classList.add('dark-mode');
  }

const toggleButton = document.getElementById('darkModeToggle');
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Állapot mentése
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}

function updateClock() {
    const clock = document.getElementById('clock');
    if (clock) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('hu-HU');
        clock.textContent = `Jelenlegi idő: ${timeString}`;
    }
}

setInterval(updateClock, 1000);
updateClock();



