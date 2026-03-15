document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Management (Dark Mode) ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const icon = darkModeToggle.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    darkModeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- Modal Management ---
    window.closeModal = (modalId) => {
        document.getElementById(modalId).style.display = 'none';
    };

    const loginTrigger = document.getElementById('login-trigger');
    const loginModal = document.getElementById('login-modal');
    const checkoutModal = document.getElementById('checkout-modal');

    loginTrigger.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });

    // --- Quiz Logic ---
    const questions = [
        { q: "How ___ you?", options: ["is", "are", "am", "be"], a: 1 },
        { q: "I ___ to the cinema yesterday.", options: ["go", "gone", "went", "goes"], a: 2 },
        { q: "She ___ a book right now.", options: ["reads", "is reading", "read", "reading"], a: 1 },
        { q: "Have you ever ___ to London?", options: ["be", "been", "was", "were"], a: 1 },
        { q: "If it rains, I ___ at home.", options: ["stay", "will stay", "stayed", "would stay"], a: 1 }
    ];

    let currentQuestion = 0;
    let score = 0;

    window.startQuiz = () => {
        document.getElementById('quiz-intro').style.display = 'none';
        document.getElementById('quiz-questions').style.display = 'block';
        showQuestion();
    };

    function showQuestion() {
        const q = questions[currentQuestion];
        document.getElementById('question-text').innerText = q.q;
        const optionsBox = document.getElementById('options-container');
        optionsBox.innerHTML = '';
        
        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt;
            btn.onclick = () => selectOption(index);
            optionsBox.appendChild(btn);
        });

        const progress = ((currentQuestion) / questions.length) * 100;
        document.getElementById('quiz-bar').style.width = progress + '%';
    }

    function selectOption(index) {
        if (index === questions[currentQuestion].a) score++;
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        document.getElementById('quiz-questions').style.display = 'none';
        document.getElementById('quiz-result').style.display = 'block';
        let level = "A1 - Beginner";
        if (score >= 4) level = "B2 - Upper Intermediate";
        else if (score >= 2) level = "B1 - Intermediate";
        document.getElementById('level-result').innerText = level;
    }

    // --- Dashboard & Login Simulation ---
    const loginForm = document.getElementById('login-form');
    const navDashboard = document.getElementById('nav-dashboard');
    const dashboardSection = document.getElementById('dashboard');
    const homeSections = document.querySelectorAll('main > section:not(#dashboard)');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        loginTrigger.style.display = 'none';
        navDashboard.style.display = 'block';
        alert('Başarıyla giriş yapıldı! Paneliniz aktif edildi.');
        
        // Simüle edilmiş geçiş
        document.querySelector('a[href="#dashboard"]').click();
    });

    document.querySelector('a[href="#dashboard"]')?.addEventListener('click', (e) => {
        e.preventDefault();
        homeSections.forEach(s => s.style.display = 'none');
        dashboardSection.style.display = 'block';
    });

    document.getElementById('logout-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        location.reload(); // Basit çıkış simülasyonu
    });

    // --- Checkout Logic ---
    const checkoutTriggers = document.querySelectorAll('.checkout-trigger');
    const planInfo = document.getElementById('selected-plan-info');
    const hiddenPlanInput = document.getElementById('hidden-plan');

    checkoutTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const plan = trigger.dataset.plan;
            const price = trigger.dataset.price;
            planInfo.innerHTML = `<h4>Seçilen: ${plan} (${price}₺/ay)</h4>`;
            hiddenPlanInput.value = plan;
            checkoutModal.style.display = 'flex';
        });
    });

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || (targetId === '#dashboard' && navDashboard.style.display === 'none')) return;
            
            e.preventDefault();
            
            // Eğer dashboard'a tıklanmadıysa ve dashboard açıksa, ana sayfaya dön
            if (targetId !== '#dashboard' && dashboardSection.style.display === 'block') {
                dashboardSection.style.display = 'none';
                homeSections.forEach(s => s.style.display = 'block');
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
