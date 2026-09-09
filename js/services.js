    // Initialize Icons
    Lucide.createIcons();

    // Scroll Reveal Observer
    Const observer = new IntersectionObserver((entries) => {
      Entries.forEach(entry => {
        If (entry.isIntersecting) entry.target.classList.add(‘active’);
      });
    }, { threshold: 0.1 });

    Document.querySelectorAll(‘.reveal’).forEach(el => observer.observe(el));

    // Code Tab Switcher
    Function switchCodeTab(lang) {
      Document.querySelectorAll(‘.code-tab’).forEach(t => t.classList.remove(‘active’));
      Document.querySelectorAll(‘.code-snippet’).forEach(s => s.classList.remove(‘active’));
      
      Event.target.classList.add(‘active’);
      Document.getElementById(‘code-‘ + lang).classList.add(‘active’);
    }

    // Copy Code Action
    Function copyCode() {
      Const activeSnippet = document.querySelector(‘.code-snippet.active’).innerText;
      Navigator.clipboard.writeText(activeSnippet);
      Alert(‘Code copied to clipboard!’);
    }

    // Filter Services
    Function filterServices(category) {
      Document.querySelectorAll(‘.tab-btn’).forEach(tab => tab.classList.remove(‘active’));
      Event.target.classList.add(‘active’);

      Document.querySelectorAll(‘.service-card’).forEach(card => {
        If (category === ‘all’ || card.dataset.category === category) {
          Card.style.display = ‘flex’;
        } else {
          Card.style.display = ‘none’;
        }
      });
    }

    // Architecture Configurator Logic
    Let selectedTimes = { fe: 10, be: 12, db: 7 };

    Function selectOpt(btn, group, val, days) {
      Btn.parentElement.querySelectorAll(‘.opt-btn’).forEach(b => b.classList.remove(‘selected’));
      Btn.classList.add(‘selected’);

      Document.getElementById(‘spec-‘ + group).innerText = val;
      selectedTimes[group] = days;

      const totalDays = selectedTimes.fe + selectedTimes.be + selectedTimes.db;
      document.getElementById(‘spec-time’).innerText = totalDays + “ Days”;
    }

    // Drawer Control
    Function openDrawer(title, body) {
      Document.getElementById(‘drawerTitle’).innerText = title;
      Document.getElementById(‘drawerBody’).innerText = body;
      Document.getElementById(‘drawerModal’).classList.add(‘active’);
    }

    Function closeDrawer() {
      Document.getElementById(‘drawerModal’).classList.remove(‘active’);
    }

    // FAQ Accordion Toggle
    Document.querySelectorAll(‘.faq-question’).forEach(button => {
      Button.addEventListener(‘click’, () => {
        Button.parentElement.classList.toggle(‘active’);
      });
    });

    // Smooth Scroll Helper
    Function scrollToSection(id) {
      Document.getElementById(id).scrollIntoView({ behavior: ‘smooth’ });
    }

