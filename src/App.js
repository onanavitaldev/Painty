/* Hide or delete load space */
setTimeout(() => {
    document.querySelector('.load').style.display = "none";
}, 1000);

ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false
});

ScrollReveal().reveal("#cover", {
    duration: 1000,
    origin: "right",
    distance: "50px",
    easing: "cubic-bezier(.37,.01,.74,1)",
    opacity: 0.3,
    scale: 0.5
});

ScrollReveal().reveal("#pricing", {
  duration: 1000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});

ScrollReveal().reveal("#form", {
    duration: 1000,
    origin: "right",
    distance: "50px",
    easing: "cubic-bezier(.37,.01,.74,1)",
    opacity: 0.3,
    scale: 0.5
});