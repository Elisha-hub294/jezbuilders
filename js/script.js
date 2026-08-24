const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.innerHTML = `${isOpen ? "CLOSE" : "MENU"} <span>${isOpen ? "×" : "☰"}</span>`;
});

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.target.querySelector(".form-status").textContent =
      "Thanks. We will be in touch soon.";
    event.target.reset();
  });
}
