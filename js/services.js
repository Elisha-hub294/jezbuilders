    const servicesData = [
      {
        id: '01',
        category: 'frontend',
        title: 'Custom Web Development',
        description: 'Scalable, high-performance web applications built with modern JavaScript frameworks. Fast load times and pixel-perfect design.',
        tags: ['React', 'JavaScript', 'HTML5/CSS3', 'REST APIs']
      },
      {
        id: '02',
        category: 'design',
        title: 'UI/UX & Product Design',
        description: 'Intuitive, modern visual interfaces crafted to convert visitors into clients. High-fidelity prototypes and full brand design systems.',
        tags: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems']
      },
      {
        id: '03',
        category: 'backend',
        title: 'Database & Backend Systems',
        description: 'Robust server architectures, custom API development, and secure database designs engineered for reliability and high load.',
        tags: ['Node.js', 'SQL', 'PostgreSQL', 'Cloud Hosting']
      },
      {
        id: '04',
        category: 'frontend',
        title: 'Performance & Optimization',
        description: 'Code refactoring, speed tuning, SEO improvements, and security audits to keep your platform operating at peak efficiency.',
        tags: ['Performance', 'SEO', 'Security', 'Code Audit']
      }
    ];

    function renderServices(data) {
      const grid = document.getElementById('servicesGrid');
      grid.innerHTML = data.map(service => `
        <div class="service-card">
          <div>
            <div class="card-top">
              <span class="service-id">${service.id}</span>
              <span class="arrow">↗</span>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.description}</p>
          </div>
          <div class="tags">
            ${service.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      `).join('');
    }

    function filterServices(category, btnElement) {
      // Toggle button active styling
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      btnElement.classList.add('active');

      // Filter grid
      if (category === 'all') {
        renderServices(servicesData);
      } else {
        const filtered = servicesData.filter(s => s.category === category);
        renderServices(filtered);
      }
    }

    function handleStartProject() {
      alert("Redirecting to project intake form...");
    }

    // Initialize layout
    document.addEventListener('DOMContentLoaded', () => renderServices(servicesData));
