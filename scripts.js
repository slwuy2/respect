document.addEventListener('DOMContentLoaded', () => {
    // --- Language Translations ---
    const translations = {
        tr: {
            nav_home: "Ana Sayfa",
            nav_courses: "Kurslar",
            nav_teachers: "Eğitmenler",
            nav_pricing: "Abonelikler",
            nav_contact: "İletişim",
            login_btn: "Giriş Yap",
            hero_title: "Potansiyelinizi Uzman Dil Eğitimiyle Keşfedin",
            hero_desc: "Akademik hedefler, kariyer gelişimi veya kişisel büyüme için tasarlanmış, her seviyeye uygun kapsamlı dil programlarımızla akıcılığa ulaşın.",
            hero_btn_primary: "Hemen Başla",
            hero_btn_secondary: "Ücretsiz Deneme Dersi",
            feat_1_title: "Anadilinde Konuşanlar",
            feat_1_desc: "Kitapların öğretemediği otantik telaffuz ve kültürel incelikleri uzman eğitmenlerimizden öğrenin.",
            feat_2_title: "İmmersif Metot",
            feat_2_desc: "İlk günden itibaren pratik konuşmaya odaklanan yaklaşımımızla doğal konuşma becerileri geliştirin.",
            feat_3_title: "Küçük Grup Sınıfları",
            feat_3_desc: "Maksimum 6 kişilik sınıflarda kişiselleştirilmiş geri bildirim ve bolca konuşma süresi elde edin.",
            teachers_title: "Uzman Eğitmenlerimizle Tanışın",
            teacher_1_role: "Fransızca Uzmanı",
            teacher_2_role: "Almanca Uzmanı",
            teacher_3_role: "Mandarin Uzmanı",
            pricing_title: "Abonelik Planları",
            plan_std_name: "STANDARD",
            plan_std_feat_1: "Sınırsız Video Kurs",
            plan_std_feat_2: "Sertifika",
            plan_std_feat_3: "1-e-1 Özel Ders",
            plan_pro_tag: "EN KAZANÇLI",
            plan_pro_name: "PRO",
            plan_pro_feat_1: "Sınırsız Video Kurs",
            plan_pro_feat_2: "Ayda 4 Saat Özel Ders",
            plan_pro_feat_3: "Sertifika",
            plan_prem_name: "PREMIUM",
            plan_prem_feat_1: "Sınırsız Video Kurs",
            plan_prem_feat_2: "Ayda 10 Saat Özel Ders",
            plan_prem_feat_3: "VIP Destek",
            plan_btn: "Planı Seç",
            booking_title: "Randevu Alın",
            booking_btn: "Gönder",
            opt_trial: "Ücretsiz Deneme Dersi",
            opt_consult: "Akademik Danışmanlık",
            placeholder_msg: "Mesajınız",
            contact_title: "İletişime Geçin",
            contact_desc: "Her türlü sorunuz için buradayız. Bize ulaşmaktan çekinmeyin.",
            modal_title: "Ödeme Detayları",
            modal_pay_btn: "Ödemeyi Tamamla"
        },
        en: {
            nav_home: "Home",
            nav_courses: "Courses",
            nav_teachers: "Teachers",
            nav_pricing: "Pricing",
            nav_contact: "Contact",
            login_btn: "Login",
            hero_title: "Unlock Your Potential with Expert Language Instruction",
            hero_desc: "Achieve fluency efficiently with our comprehensive language programs designed for students at all levels, whether for academic, career, or personal growth.",
            hero_btn_primary: "Get Started",
            hero_btn_secondary: "Free Trial Lesson",
            feat_1_title: "Native Speakers",
            feat_1_desc: "Learn authentic pronunciation and cultural nuances that textbooks alone cannot teach from our expert instructors.",
            feat_2_title: "Immersive Method",
            feat_2_desc: "Focus on practical conversation from day one and develop natural speaking skills through our immersive approach.",
            feat_3_title: "Small Group Classes",
            feat_3_desc: "Receive personalized feedback and ample speaking time in every session with a maximum of 6 students per class.",
            teachers_title: "Meet Our Expert Teachers",
            teacher_1_role: "French Specialist",
            teacher_2_role: "German Specialist",
            teacher_3_role: "Mandarin Specialist",
            pricing_title: "Subscription Plans",
            plan_std_name: "STANDARD",
            plan_std_feat_1: "Unlimited Video Courses",
            plan_std_feat_2: "Certificate of Completion",
            plan_std_feat_3: "1-on-1 Lessons",
            plan_pro_tag: "BEST VALUE",
            plan_pro_name: "PRO",
            plan_pro_feat_1: "Unlimited Video Courses",
            plan_pro_feat_2: "4 Hours of 1-on-1 Lessons/Month",
            plan_pro_feat_3: "Certificate of Completion",
            plan_prem_name: "PREMIUM",
            plan_prem_feat_1: "Unlimited Video Courses",
            plan_prem_feat_2: "10 Hours of 1-on-1 Lessons/Month",
            plan_prem_feat_3: "VIP Support",
            plan_btn: "Select Plan",
            booking_title: "Book a Lesson",
            booking_btn: "Send",
            opt_trial: "Free Trial Lesson",
            opt_consult: "Academic Consultation",
            placeholder_msg: "Your Message",
            contact_title: "Get in Touch",
            contact_desc: "We're here to help with any questions you may have. Feel free to reach out.",
            modal_title: "Payment Details",
            modal_pay_btn: "Complete Payment"
        }
    };

    function switchLanguage(lang) {
        document.body.setAttribute('data-lang', lang);
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerText = translations[lang][key];
                }
            }
        });
        
        // Update active class in switch
        document.querySelectorAll('.lang-switch span').forEach(s => s.classList.remove('active'));
        document.getElementById(`lang-${lang}`).classList.add('active');
    }

    document.getElementById('lang-tr').addEventListener('click', () => switchLanguage('tr'));
    document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));

    // --- Theme Management ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    // --- Modal Logic ---
    const modal = document.getElementById('checkout-modal');
    const closeBtn = document.querySelector('.close-modal');
    const triggers = document.querySelectorAll('.checkout-trigger');

    triggers.forEach(t => {
        t.addEventListener('click', () => {
            const plan = t.getAttribute('data-plan');
            const price = t.getAttribute('data-price');
            document.getElementById('selected-plan-info').innerHTML = `<h3>${plan} - ${price}₺</h3>`;
            document.getElementById('hidden-plan').value = plan;
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if(e.target === modal) modal.style.display = 'none'; });

    // --- Form Handling ---
    async function handleForm(form, msg) {
        const btn = form.querySelector('button');
        btn.disabled = true;
        btn.innerText = '...';

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (res.ok) {
                alert(msg);
                form.reset();
                modal.style.display = 'none';
            } else {
                alert('Hata! Lütfen e-postanızı onaylayın.');
            }
        } catch {
            alert('Bağlantı hatası.');
        } finally {
            btn.disabled = false;
            btn.innerText = 'Gönder';
        }
    }

    document.getElementById('booking-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleForm(this, 'Randevu talebiniz alındı!');
    });

    document.getElementById('payment-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleForm(this, 'Ödemeniz alındı!');
    });
});
