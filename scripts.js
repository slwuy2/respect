document.addEventListener('DOMContentLoaded', () => {
    // --- Language Translations (Wix Exact Match) ---
    const translations = {
        tr: {
            nav_home: "Ana Sayfa",
            nav_courses: "Kurslar",
            nav_teachers: "Eğitmenler",
            nav_events: "Etkinlikler",
            nav_blog: "Blog",
            login_btn: "Giriş Yap",
            hero_title: "Potansiyelinizi Uzman Dil Eğitimiyle Keşfedin",
            hero_subtitle: "Kurs Genel Bakış",
            hero_desc: "Her seviyeden öğrenci için tasarlanmış kapsamlı dil öğrenme programımıza hoş geldiniz. Kurslarımız, akademik amaçlar, kariyer gelişimi veya kişisel büyüme için akıcılığa verimli bir şekilde ulaşmanıza yardımcı olmak amacıyla kanıtlanmış öğretim metodolojilerini interaktif pratikle birleştirir.",
            comfort_path: "Konfor Yolu",
            group_classes_title: "Grup Dersleri",
            group_classes_desc: "İşbirlikçi bir ortamda konuşma ve dinleme pratiği yapacağınız dinamik grup oturumlarımıza katılın. Küçük sınıf mevcutları, akran öğreniminden yararlanmanızı sağlarken kişiselleştirilmiş ilgi görmenizi sağlar.",
            expert_banner_title: "UZMAN EĞİTMENLERİMİZLE TANIŞIN — DİL ÖĞRENME BAŞARINIZA ADANMIŞ, GENİŞ SINIF DENEYİMİNE SAHİP, SERTİFİKALI DİL UZMANLARI.",
            expert_banner_desc: "Eğitmenlerimiz, başarılı bir dil yolculuğu sağlamak için anadil düzeyinde akıcılığa ve kanıtlanmış öğretim deneyimine sahip sertifikalı profesyonellerdir.",
            intensive_course: "Yoğun Kurs",
            one_to_one_title: "1-e-1 Özel Ders",
            one_to_one_desc: "Özel ihtiyaçlarınıza, hızınıza ve öğrenme stilinize göre uyarlanmış özelleştirilmiş bire bir eğitimin tadını çıkarın. Özel derslerimiz, hızlı ilerleme için müfredat odağı ve zamanlama konusunda maksimum esneklik sunar.",
            feel_free: "BAŞLAMAKTAN ÇEKİNMEYİN",
            trial_title: "Ücretsiz Deneme Dersi",
            trial_desc: "Nereden başlayacağınızdan emin değil misiniz? Öğretim yaklaşımımızı deneyimlemek için 30 dakikalık ücretsiz bir oturum planlayın. Bu yükümlülük gerektirmeyen deneme, dil yolculuğunuz için doğru öğrenme yolunu belirlemenize yardımcı olur.",
            trial_btn: "Ücretsiz Deneme Dersi Al",
            feat_1_title: "Anadilinde Konuşanlar",
            feat_1_desc: "Kitapların öğretemediği otantik telaffuz, kültürel incelikler ve doğal dil kalıplarını uzman eğitmenlerimizden öğrenin.",
            feat_2_title: "İmmersif Metot",
            feat_2_desc: "İlk günden itibaren pratik konuşmaya odaklanan yaklaşımımızla, bağlamsal öğrenme yoluyla doğal konuşma becerileri geliştirin.",
            feat_3_title: "Küçük Grup Sınıfları",
            feat_3_desc: "Sınıf başına maksimum 6 öğrenci ile her oturumda kişiselleştirilmiş geri bildirim ve bolca konuşma süresi elde edin.",
            feat_4_title: "Video Kurs Aboneliği",
            feat_4_desc: "İnteraktif egzersizlerle birlikte profesyonelce kaydedilmiş ders kütüphanemize dilediğiniz zaman erişin.",
            feat_5_title: "Esnek Program",
            feat_5_desc: "Yoğun yaşam tarzınıza uyum sağlayacak sabah, akşam veya hafta sonu sınıflarından birini seçin; gerektiğinde dersinizi yeniden planlayın.",
            feat_6_title: "Dijital Kaynaklar",
            feat_6_desc: "Dersler arasında interaktif egzersizler, sesli materyaller ve ek içeriklerle dolu özel çevrimiçi platformumuza erişin.",
            feat_7_title: "İlerleme Takibi",
            feat_7_desc: "Düzenli değerlendirmeler ve detaylı geri bildirimlerle gelişiminizi ölçün ve odaklanmanız gereken alanları belirleyin.",
            feat_8_title: "Kültürel Bileşen",
            feat_8_desc: "Dilin otantik bağlamlarda nasıl kullanıldığını şekillendiren gelenekleri, tarihi ve sosyal nüansları keşfedin.",
            study_europe: "STUDY IN EUROPE",
            europe_title: "Avrupa'da Üniversite Eğitimi ve Akademik Danışmanlık Programları",
            europe_desc: "Avrupa'daki üniversite başvuru süreçleri, vize işlemleri ve konaklama çözümleri için teknik ve akademik destek sağlıyoruz.",
            courses_title: "Kurslarımız",
            courses_subtitle: "Gerçek dünya durumları için pratik iletişim becerileri geliştirmek üzere tasarlanmış çeşitli dil kursları arasından seçim yapın.",
            course_1_title: "Grup Canlı Kurslar",
            course_2_title: "Ücretsiz Deneme Dersi",
            free: "Ücretsiz",
            join_btn: "Hemen Başla",
            faq_title: "Sıkça Sorulan Sorular",
            news_title: "İletişim ve Etkinlik Topluluğumuza Abone Olun",
            subscribe_btn: "Abone Ol",
            modal_title: "Ödeme Detayları",
            modal_pay_btn: "Ödemeyi Tamamla",
            placeholder_msg: "Mesajınız",
            booking_title: "Randevu Alın",
            booking_btn: "Gönder",
            opt_trial: "Ücretsiz Deneme Dersi",
            opt_consult: "Akademik Danışmanlık",
            teacher_1_role: "Fransızca Uzmanı",
            teacher_2_role: "Almanca Uzmanı",
            teacher_3_role: "Mandarin Uzmanı"
        },
        en: {
            nav_home: "Home",
            nav_courses: "Courses",
            nav_teachers: "Teachers",
            nav_events: "Events",
            nav_blog: "Blog",
            login_btn: "Login",
            hero_title: "Unlock Your Potential with Expert Language Instruction",
            hero_subtitle: "Course Overview",
            hero_desc: "Welcome to our comprehensive language learning program designed for students at all levels. Our courses combine proven teaching methodologies with interactive practice to help you achieve fluency efficiently, whether for academic purposes, career advancement, or personal growth.",
            comfort_path: "Comfort Path",
            group_classes_title: "Group Classes",
            group_classes_desc: "Join our dynamic group sessions where you'll practice speaking and listening in a collaborative environment. Small class sizes ensure personalized attention while allowing you to benefit from peer learning.",
            expert_banner_title: "MEET OUR EXPERT TEACHERS — NATIVE-FLUENT, CERTIFIED LANGUAGE SPECIALISTS WITH EXTENSIVE CLASSROOM EXPERIENCE DEDICATED TO YOUR LANGUAGE LEARNING SUCCESS.",
            expert_banner_desc: "Our instructors are certified professionals with native-level fluency and proven teaching experience to ensure your successful language journey.",
            intensive_course: "Intensive Course",
            one_to_one_title: "1-to-1 Lessons",
            one_to_one_desc: "Experience customized one-on-one instruction tailored to your specific needs, pace, and learning style. Our private lessons offer maximum flexibility with scheduling and curriculum focus for rapid progress.",
            feel_free: "FEEL FREE TO START",
            trial_title: "Free Trial Lesson",
            trial_desc: "Unsure where to start? Book a complimentary 30-minute session to experience our teaching approach. This no-obligation trial helps you determine the right learning path for your language journey.",
            trial_btn: "Get Free Trial Lesson",
            feat_1_title: "Native Speakers",
            feat_1_desc: "Learn from instructors who provide authentic pronunciation, cultural insights, and natural language patterns that textbooks alone cannot teach.",
            feat_2_title: "Immersive Method",
            feat_2_desc: "Our approach focuses on practical conversation from day one, helping you develop natural speaking skills through contextual learning.",
            feat_3_title: "Small Group Sizes",
            feat_3_desc: "With maximum 6 students per class, you'll receive personalized feedback and ample speaking time in every session.",
            feat_4_title: "Video Course Subscription",
            feat_4_desc: "Access our library of professionally recorded lessons at your convenience with interactive exercises.",
            feat_5_title: "Flexible Schedule",
            feat_5_desc: "Choose from morning, evening, or weekend classes to fit your busy lifestyle, with options to reschedule when needed.",
            feat_6_title: "Digital Resources",
            feat_6_desc: "Access our exclusive online platform with interactive exercises, audio materials, and supplementary content between classes.",
            feat_7_title: "Progress Tracking",
            feat_7_desc: "Regular assessments and detailed feedback help you measure improvement and identify areas needing additional focus.",
            feat_8_title: "Cultural Component",
            feat_8_desc: "Discover the traditions, history, and social nuances that shape how language is used in authentic contexts.",
            study_europe: "STUDY IN EUROPE",
            europe_title: "University Education and Academic Consultancy Programs in Europe",
            europe_desc: "We provide technical and academic support for university application processes, visa procedures, and accommodation solutions in Europe.",
            courses_title: "Our Courses",
            courses_subtitle: "Choose from a variety of engaging language courses designed to develop practical communication skills for real-world situations.",
            course_1_title: "Group Live Courses",
            course_2_title: "Free Trial Lesson",
            free: "Free",
            join_btn: "Start Now",
            faq_title: "Frequently Asked Questions",
            news_title: "Subscribe to Our Communication and Event Community",
            subscribe_btn: "Subscribe",
            modal_title: "Payment Details",
            modal_pay_btn: "Complete Payment",
            placeholder_msg: "Your Message",
            booking_title: "Book a Lesson",
            booking_btn: "Send",
            opt_trial: "Free Trial Lesson",
            opt_consult: "Academic Consultation",
            teacher_1_role: "French Specialist",
            teacher_2_role: "German Specialist",
            teacher_3_role: "Mandarin Specialist"
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

    // --- Accordion ---
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
        });
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

    // --- Form Handling (AJAX) ---
    async function handleForm(form, successMsg) {
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        btn.disabled = true;
        btn.innerText = '...';

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (res.ok) {
                alert(successMsg);
                form.reset();
                if(modal) modal.style.display = 'none';
            } else {
                alert('Hata! Lütfen e-postanızı doğrulayın.');
            }
        } catch {
            alert('Bağlantı hatası.');
        } finally {
            btn.disabled = false;
            btn.innerText = originalText;
        }
    }

    document.getElementById('booking-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleForm(this, 'Talebiniz alındı!');
    });

    document.getElementById('payment-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleForm(this, 'Ödemeniz alındı!');
    });
});
