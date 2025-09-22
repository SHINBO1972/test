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
    document.querySelectorAll('header nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
                if (mainNav && mainNav.classList.contains('is-active')) {
                    mainNav.classList.remove('is-active');
                }
            }
        });
    });

    // --- 3. 스크롤 애니메이션 기능 ---
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

    // --- 4. 팝업(모달) 공통 기능 ---
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    const closeModalButtons = document.querySelectorAll('.close-modal-btn');
    const modalOverlays = document.querySelectorAll('.modal-overlay');

    // 모달 여는 함수
    function openModal(modal) {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    // 모달 닫는 함수
    function closeModal(modal) {
         if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.getAttribute('data-modal-target'));
            openModal(modal);
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal-overlay');
            closeModal(modal);
        });
    });

    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                closeModal(overlay);
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            closeModal(activeModal);
        }
    });

    // =================================================================
    // ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ 페이지 로드 시 자동 팝업 실행 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
    // =================================================================
    const noticePopup = document.getElementById('notice-popup');
    if (noticePopup) {
        // 약간의 시간차를 두고 팝업을 띄워 더 부드러운 느낌을 줍니다.
        setTimeout(() => {
            openModal(noticePopup);
        }, 500); // 0.5초 후에 실행
    }
});
