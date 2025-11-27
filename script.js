// ====================== MODE SOMBRE ======================
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// ====================== ANIMATIONS AU SCROLL ======================
const fadeElements = document.querySelectorAll('.fade-in');
const slideElements = document.querySelectorAll('.slide-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));
slideElements.forEach(el => observer.observe(el));

// ====================== CARTE OPENSTREETMAP ======================
const map = L.map('map').setView([48.731, -3.461], 13); // Lannion

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.marker([48.731, -3.461]).addTo(map)
    .bindPopup('Lannion, Bretagne')
    .openPopup();
