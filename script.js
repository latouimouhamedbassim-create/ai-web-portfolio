// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Fade-in cards on scroll
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = "none";
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.15 }
);

document.querySelectorAll(".card, .stats div").forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(16px)";
  el.style.transition = "opacity .5s ease, transform .5s ease, border-color .2s";
  observer.observe(el);
});
