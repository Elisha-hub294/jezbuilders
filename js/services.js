 if (typeof lucide !== 'undefined') { lucide.createIcons(); }

    // Mobile Navigation Controls
    function openMobileNav() {
      document.getElementById('mobileMenu').classList.add('active');
      document.getElementById('menuOverlay').classList.add('active');
    }

    function closeMobileNav() {
      document.getElementById('mobileMenu').classList.remove('active');
      document.getElementById('menuOverlay').classList.remove('active');
    }

    // Service Filtering
    function filterServices(category, btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cards = document.querySelectorAll('.service-card');
      cards.forEach(card => {
        if (category === 'all' || card.dataset.cat === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    // Modal Control
    function openModal(title, description) {
      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalDescription').innerText = description;
      document.getElementById('serviceModal').classList.add('open');
    }

    function closeModal() {
      document.getElementById('serviceModal').classList.remove('open');
    }

    // Architecture Configurator Logic
    const stacks = {
      webapp: [
        "Client Layer: React / Next.js (Edge Rendered)",
        "API Gateway: C# .NET Core REST Endpoint",
        "Database Layer: PostgreSQL Cluster + Redis Cache"
      ],
      realtime: [
        "Client Layer: WebSockets / Event Listeners",
        "Messaging Node: Node.js Broker & Pub/Sub",
        "Cache & Memory: Redis Stateful Memory Store"
      ],
      python_ai: [
        "Input API: FastAPI Async Router",
        "Processing Engine: Python Data Pipeline",
        "Containerization: Isolated Docker Sandbox"
      ]
    };

    function selectStack(key, element) {
      document.querySelectorAll('.stack-option').forEach(el => el.classList.remove('active'));
      element.classList.add('active');

      const diagram = document.getElementById('stackDiagram');
      diagram.innerHTML = stacks[key].map(step => `<div class="node">${step}</div>`).join('');
    }

    // Load initial stack
    selectStack('webapp', document.querySelector('.stack-option'));

