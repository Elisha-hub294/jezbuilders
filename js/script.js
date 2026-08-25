const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.innerHTML = `${isOpen ? "CLOSE" : "MENU"} <span>${isOpen ? "×" : "☰"}</span>`;
  });
}

const aboutPage = document.querySelector(".about-page");
if (aboutPage) {
  document.body.classList.add("has-scroll-reveal");

  const revealItems = aboutPage.querySelectorAll(
    ".about-section, .philosophy-band, .about-cta, .about-card, .team-card, .principles-grid article, .process-grid article",
  );

  revealItems.forEach((item, index) => {
    item.classList.add("reveal-on-scroll");
    item.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
  });

  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12%" },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const siteHeader = document.querySelector(".site-header");
  const updateHeader = () =>
    siteHeader?.classList.toggle("is-scrolled", window.scrollY > 24);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.target.querySelector(".form-status").textContent =
      "Thanks. We will be in touch soon.";
    event.target.reset();
  });
}
