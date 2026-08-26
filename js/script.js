const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");
const siteHeader = document.querySelector(".site-header");

document.addEventListener("dragstart", (event) => {
  event.preventDefault();
});

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

  const typingHeadline = aboutPage.querySelector(".typing-headline");
  if (typingHeadline) {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion) {
      const prefix = typingHeadline.querySelector(".typing-prefix");
      const emphasis = typingHeadline.querySelector("em");
      const resizeHeadline = () => {
        typingHeadline.style.height = `${typingHeadline.getBoundingClientRect().height}px`;
        void typingHeadline.offsetHeight;
        typingHeadline.style.height = `${typingHeadline.scrollHeight}px`;
      };
      const messages = [
        { prefix: "We build what ", emphasis: "moves you forward." },
        { prefix: "Ideas become ", emphasis: "digital products." },
        { prefix: "Good software starts with ", emphasis: "clarity." },
        { prefix: "We turn ambition into ", emphasis: "momentum." },
      ];
      const reserveHeadlineHeight = () => {
        const originalPrefix = prefix.textContent;
        const originalEmphasis = emphasis.textContent;
        let maxHeight = 0;

        typingHeadline.style.height = "auto";
        messages.forEach((message) => {
          prefix.textContent = message.prefix;
          emphasis.textContent = message.emphasis;
          maxHeight = Math.max(maxHeight, typingHeadline.scrollHeight);
        });

        prefix.textContent = originalPrefix;
        emphasis.textContent = originalEmphasis;
        typingHeadline.style.minHeight = `${maxHeight}px`;
        typingHeadline.style.height = `${maxHeight}px`;
      };
      let messageIndex = 0;

      const updateAccessibleLabel = (message) => {
        typingHeadline.setAttribute(
          "aria-label",
          `${message.prefix}${message.emphasis}`,
        );
      };

      const typeMessage = (message, onComplete) => {
        const parts = [
          { element: prefix, text: message.prefix },
          { element: emphasis, text: message.emphasis },
        ];
        let partIndex = 0;
        let characterIndex = 0;
        prefix.textContent = "";
        emphasis.textContent = "";
        updateAccessibleLabel(message);
        resizeHeadline();

        const typeNextCharacter = () => {
          const part = parts[partIndex];
          if (!part) {
            onComplete();
            return;
          }

          part.element.textContent += part.text[characterIndex];
          resizeHeadline();
          characterIndex += 1;
          if (characterIndex >= part.text.length) {
            partIndex += 1;
            characterIndex = 0;
          }
          window.setTimeout(typeNextCharacter, 62);
        };

        typeNextCharacter();
      };

      const deleteMessage = (onComplete) => {
        const parts = [emphasis, prefix];
        let partIndex = 0;

        const deleteNextCharacter = () => {
          const part = parts[partIndex];
          if (!part) {
            onComplete();
            return;
          }

          part.textContent = part.textContent.slice(0, -1);
          resizeHeadline();
          if (!part.textContent) partIndex += 1;
          window.setTimeout(deleteNextCharacter, 35);
        };

        deleteNextCharacter();
      };

      const rotateMessage = () => {
        const waitTime = 10000 + Math.random() * 10000;
        window.setTimeout(() => {
          deleteMessage(() => {
            messageIndex = (messageIndex + 1) % messages.length;
            typeMessage(messages[messageIndex], rotateMessage);
          });
        }, waitTime);
      };

      typeMessage(messages[messageIndex], rotateMessage);
      reserveHeadlineHeight();
    }
  }

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
}

if (siteHeader) {
  const updateHeader = () => {
    const isScrolled = window.scrollY > 24;
    siteHeader.classList.toggle("is-scrolled", isScrolled);
    siteHeader.classList.toggle("is-top", !isScrolled);
  };
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
