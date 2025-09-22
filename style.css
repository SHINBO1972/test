// HTML 문서가 모두 로드된 후, 아래의 모든 코드를 딱 한 번 실행합니다.
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. 햄버거 메뉴 기능 ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const mainNav = document.getElementById('main-nav');

    if (hamburgerButton && mainNav) {
        hamburgerButton.addEventListener('click', function() {
            mainNav.classList.toggle('is-active');
        });
    }

    // --- 2. 부드러운 스크롤 기능 ---
    // (메인 페이지에서는 부드럽게 스크롤, 서브 페이지에서는 메인으로 이동)
    document.querySelectorAll('header nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
                // 모바일 메뉴가 열려있다면 클릭 시 닫기
                if (mainNav && mainNav.classList.contains('is-active')) {
                    mainNav.classList.remove('is-active');
                }
            }
        });
    });

    // --- 3. 스크롤 애니메이션 기능 ---
    // (메인 페이지의 .section 요소들이 나타날 때 적용)
    const sections = document.querySelectorAll('.section');
    if (sections.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    // --- 4. 팝업(모달) 기능 ---
    // (모달이 있는 페이지에서만 작동)
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    const closeModalButtons = document.querySelectorAll('.close-modal-btn');
    const modalOverlays = document.querySelectorAll('.modal-overlay');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal-target');
            const modal = document.querySelector(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal-overlay');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) {
                activeModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

});
