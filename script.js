// ANIMATION D’APPARITION
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
});

fadeElements.forEach(el => observer.observe(el));

// MODE SOMBRE / CLAIR

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Changer icône
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
