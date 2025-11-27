// ================== ANIMATIONS ==================
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
});

fadeElements.forEach(el => observer.observe(el));

// ================== MODE SOMBRE ==================
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ================== CARTE OPENSTREETMAP ==================
const map = L.map('map').setView([48.732, -3.456], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

L.marker([48.732, -3.456]).addTo(map)
    .bindPopup('Lannion – Bretagne')
    .openPopup();

