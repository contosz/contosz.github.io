const hamburgerBtn = document.getElementById('hamburgerBtn');
const navContainer = document.querySelector('.nav-container');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navContainer.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navContainer.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburgerBtn.contains(e.target) && !navContainer.contains(e.target)) {
        hamburgerBtn.classList.remove('active');
        navContainer.classList.remove('active');
    }
});

const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  const timeString = now.toLocaleTimeString('hu-HU');
  clock.textContent = `Jelenlegi idő: ${timeString}`;
}

setInterval(updateClock, 1000);
updateClock();

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();  // Megakadályozza a form tényleges elküldését

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Köszönjük, hogy kapcsolatba léptél! Hamarosan válaszolunk.');
    form.reset(); // Form törlés
  } else {
    alert('Kérlek, töltsd ki az összes mezőt!');
  }
});

form.addEventListener('submit', (event) => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Kérlek, töltsd ki az összes mezőt!');
    event.preventDefault();
  }
});

