/* =========================================================
   JEZBUILDERS PROJECTS PAGE
========================================================= */

(function () {
  const projectsData = [
    {
      id: "northstar",
      category: "website",
      categoryLabel: "Website",
      title: "Northstar",
      tagline: "Turning a new category into a clear point of view.",
      description:
        "A brand platform and marketing site for a startup naming a category nobody had defined yet.",
      metric: "+140%",
      metricLabel: "Organic traffic in 6mo",
      tags: ["Custom CMS", "SEO architecture", "Brand system"],
      visual: "browser",
      caseStudy: {
        challenge:
          "Northstar had a strong product but no shared language for what it did. Every page on the old site described a different category, and organic search had nothing consistent to rank for.",
        solution:
          "We ran a positioning sprint with the founders, then built a fast, server-rendered marketing site around that single point of view — with a content structure designed for the exact terms buyers were already searching.",
        results: [
          { value: "+140%", label: "Organic traffic, 6 months" },
          { value: "2.3x", label: "Demo requests" },
          { value: "0.8s", label: "Time to first byte" },
        ],
        stack: ["Next.js", "Sanity CMS", "Vercel", "Plausible"],
      },
    },
    {
      id: "fieldwork",
      category: "webapp",
      categoryLabel: "Web app",
      title: "Fieldwork",
      tagline: "Making data feel like a useful conversation.",
      description:
        "A field-operations dashboard that replaced a shared spreadsheet three teams were fighting over.",
      metric: "72%",
      metricLabel: "Weekly active use",
      tags: ["React", "Node.js", "Postgres", "Realtime sync"],
      visual: "dashboard",
      caseStudy: {
        challenge:
          "Field reps logged visits in a spreadsheet that only one person could safely edit at a time. Managers found out about problems days after they happened.",
        solution:
          "We built a realtime dashboard with role-based views, so reps log from their phones and managers see status change live. The interface prioritizes the three numbers each role actually checks daily.",
        results: [
          { value: "72%", label: "Weekly active use" },
          { value: "-5 days", label: "Issue detection time" },
          { value: "0", label: "Spreadsheet merge conflicts" },
        ],
        stack: ["React", "Node.js", "PostgreSQL", "WebSockets"],
      },
    },
    {
      id: "cartly",
      category: "website",
      categoryLabel: "Website",
      title: "Cartly",
      tagline: "A storefront built to survive its own traffic spikes.",
      description:
        "A direct-to-consumer storefront rebuilt after checkout kept failing during promotional drops.",
      metric: "+58%",
      metricLabel: "Checkout conversion",
      tags: ["Headless commerce", "Edge caching", "A/B testing"],
      visual: "browser",
      caseStudy: {
        challenge:
          "Cartly's checkout crashed during every major sale. Support tickets spiked exactly when revenue should have.",
        solution:
          "We moved to a headless commerce setup with edge-cached product pages and a checkout flow load-tested to ten times normal traffic before launch day.",
        results: [
          { value: "+58%", label: "Checkout conversion" },
          { value: "0", label: "Downtime on drop days" },
          { value: "1.1s", label: "Avg page load" },
        ],
        stack: ["Shopify Hydrogen", "Cloudflare", "Klaviyo"],
      },
    },
    {
      id: "loop",
      category: "design",
      categoryLabel: "Design",
      title: "Loop",
      tagline: "One design system, four product teams, zero drift.",
      description:
        "A component library and design system built so four product squads stopped rebuilding the same button.",
      metric: "40+",
      metricLabel: "Shared components shipped",
      tags: ["Figma", "Design tokens", "Storybook"],
      visual: "kit",
      caseStudy: {
        challenge:
          "Each product team had its own version of the same dropdown, with subtly different spacing and behavior. QA time was going to inconsistency, not bugs.",
        solution:
          "We audited every existing pattern, consolidated them into token-based components, and shipped a Storybook library the design and engineering teams both reference before building anything new.",
        results: [
          { value: "40+", label: "Components shipped" },
          { value: "-30%", label: "New feature build time" },
          { value: "4", label: "Teams standardized" },
        ],
        stack: ["Figma", "Style Dictionary", "Storybook", "React"],
      },
    },
    {
      id: "pulseboard",
      category: "webapp",
      categoryLabel: "Web app",
      title: "Pulseboard",
      tagline: "Analytics a founder can read in under a minute.",
      description:
        "A metrics dashboard for a Series A startup that had data everywhere and clarity nowhere.",
      metric: "1.1s",
      metricLabel: "Avg dashboard load",
      tags: ["Data pipeline", "Charting", "Role-based access"],
      visual: "dashboard",
      caseStudy: {
        challenge:
          "Leadership pulled numbers from four tools before every board meeting, and the numbers rarely agreed with each other.",
        solution:
          "We built a single pipeline into one dashboard with one source of truth per metric, and gave each role a default view tuned to the three things they're accountable for.",
        results: [
          { value: "1.1s", label: "Avg dashboard load" },
          { value: "4 → 1", label: "Tools consolidated" },
          { value: "100%", label: "Metric agreement at board meetings" },
        ],
        stack: ["React", "BigQuery", "dbt", "Recharts"],
      },
    },
    {
      id: "vantage",
      category: "product",
      categoryLabel: "Product",
      title: "Vantage",
      tagline: "The internal tool a logistics team didn't know it needed.",
      description:
        "A custom dispatch tool for a regional logistics company still coordinating routes over phone calls.",
      metric: "-35%",
      metricLabel: "Missed pickup windows",
      tags: ["Custom software", "Route logic", "SMS notifications"],
      visual: "ops",
      caseStudy: {
        challenge:
          "Dispatchers coordinated 40+ daily pickups by phone and paper. Missed windows meant real financial penalties.",
        solution:
          "We built a lightweight dispatch console with route suggestions and automatic SMS updates to drivers and clients, designed to work from a tablet in a moving truck.",
        results: [
          { value: "-35%", label: "Missed pickup windows" },
          { value: "6hrs/wk", label: "Dispatcher time saved" },
          { value: "3wks", label: "Time to first working version" },
        ],
        stack: ["React Native", "Node.js", "Twilio", "Mapbox"],
      },
    },
  ];

  const grid = document.getElementById("projectsGrid");
  const emptyState = document.getElementById("projectsEmpty");
  if (!grid) return;

  function visualMarkup(type) {
    switch (type) {
      case "browser":
        return `
          <div class="mock-browser" aria-hidden="true">
            <div class="mock-browser-bar">
              <span></span><span></span><span></span>
              <span class="mock-browser-url">yourproduct.com</span>
            </div>
            <div class="mock-browser-body">
              <div class="mock-browser-hero" style="background: var(--acid)"></div>
              <div class="mock-browser-line"></div>
              <div class="mock-browser-line short"></div>
              <div class="mock-browser-cards">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>`;
      case "dashboard":
        return `
          <div class="mock-dash" aria-hidden="true">
            <div class="mock-dash-top"><span>overview</span><span>● live</span></div>
            <div class="mock-dash-body">
              <div class="mock-dash-kpi"><strong>72%</strong><span>Retention</span></div>
              <div class="mock-dash-kpi"><strong>1.1s</strong><span>Avg load</span></div>
              <div class="mock-dash-chart">
                <span style="--h:35%"></span><span style="--h:55%"></span><span style="--h:42%"></span>
                <span style="--h:68%"></span><span style="--h:50%"></span><span style="--h:78%"></span>
              </div>
            </div>
          </div>`;
      case "kit":
        return `
          <div class="mock-kit" aria-hidden="true">
            <span class="mock-kit-swatch k1"></span>
            <span class="mock-kit-swatch k2"></span>
            <span class="mock-kit-swatch k4">Aa</span>
            <span class="mock-kit-swatch k5"></span>
            <span class="mock-kit-swatch k3"></span>
            <span class="mock-kit-swatch k6"><span></span><span></span></span>
          </div>`;
      case "ops":
        return `
          <div class="mock-ops" aria-hidden="true">
            <div class="mock-ops-row"><b>Route 04 — Denton</b><span class="mock-ops-status ok">On time</span></div>
            <div class="mock-ops-rule"></div>
            <div class="mock-ops-row"><b>Route 07 — Aldine</b><span class="mock-ops-status wait">Delayed</span></div>
            <div class="mock-ops-rule"></div>
            <div class="mock-ops-row"><b>Route 12 — Katy</b><span class="mock-ops-status ok">On time</span></div>
          </div>`;
      default:
        return "";
    }
  }

  function cardMarkup(project, index) {
    return `
      <article class="showcase-card reveal-on-scroll" data-category="${project.category}" style="--reveal-delay: ${(index % 3) * 80}ms">
        <div class="showcase-visual">${visualMarkup(project.visual)}</div>
        <div class="showcase-details">
          <div class="project-tags">
            <span class="badge-category">${project.categoryLabel}</span>
            <span class="badge-metric">${project.metric} ${project.metricLabel}</span>
          </div>
          <h3>${project.tagline}</h3>
          <p>${project.description}</p>
          <p class="tech-stack-inline">Stack: <span>${project.tags.join(" · ")}</span></p>
          <button class="case-study-link" type="button" data-case="${project.id}">View case study ↗</button>
        </div>
      </article>`;
  }

  function attachReveal(items) {
    if (
      "IntersectionObserver" in window &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10%" }
      );
      items.forEach((item) => observer.observe(item));
    } else {
      items.forEach((item) => item.classList.add("is-visible"));
    }
  }

  function renderGrid() {
    grid.innerHTML = projectsData.map(cardMarkup).join("");
    attachReveal(grid.querySelectorAll(".reveal-on-scroll"));
  }

  renderGrid();

  // Reveal the static sections too (spotlight, testimonials, cta)
  attachReveal(
    document.querySelectorAll(
      ".spotlight-strip, .testimonial-card, .projects-cta"
    )
  );
  document
    .querySelectorAll(".spotlight-strip, .testimonial-card, .projects-cta")
    .forEach((el) => el.classList.add("reveal-on-scroll"));

  /* -------------------- Filtering -------------------- */
  const filterButtons = document.querySelectorAll(".proj-filter-btn");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      const cards = grid.querySelectorAll(".showcase-card");
      let visibleCount = 0;

      cards.forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.hidden = !match;
        if (match) visibleCount += 1;
      });

      emptyState.hidden = visibleCount !== 0;
    });
  });

  /* -------------------- Case study modal -------------------- */
  const modal = document.getElementById("projModal");
  const modalCategory = document.getElementById("projModalCategory");
  const modalTitle = document.getElementById("projModalTitle");
  const modalTagline = document.getElementById("projModalTagline");
  const modalMetrics = document.getElementById("projModalMetrics");
  const modalChallenge = document.getElementById("projModalChallenge");
  const modalSolution = document.getElementById("projModalSolution");
  const modalStack = document.getElementById("projModalStack");

  let lastFocused = null;

  function openModal(project) {
    modalCategory.textContent = project.categoryLabel;
    modalTitle.textContent = project.title;
    modalTagline.textContent = project.tagline;
    modalMetrics.innerHTML = project.caseStudy.results
      .map((r) => `<div><strong>${r.value}</strong><span>${r.label}</span></div>`)
      .join("");
    modalChallenge.textContent = project.caseStudy.challenge;
    modalSolution.textContent = project.caseStudy.solution;
    modalStack.innerHTML = project.caseStudy.stack
      .map((s) => `<span>${s}</span>`)
      .join("");

    lastFocused = document.activeElement;
    modal.setAttribute("data-open", "");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("proj-modal-open");
    modal.querySelector(".proj-modal-close").focus();
  }

  function closeModal() {
    modal.removeAttribute("data-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("proj-modal-open");
    if (lastFocused) lastFocused.focus();
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-case]");
    if (trigger) {
      event.preventDefault();
      const project = projectsData.find((p) => p.id === trigger.dataset.case);
      if (project) openModal(project);
      return;
    }
    if (event.target.closest("[data-close]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.hasAttribute("data-open")) {
      closeModal();
    }
  });
})();