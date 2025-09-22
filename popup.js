// 이 스크립트는 자동 실행 팝업창만을 제어합니다.

document.addEventListener('DOMContentLoaded', function() {
    
    // 팝업 관련 요소들을 변수에 담습니다.
    const popupOverlay = document.getElementById('popup-overlay');
    const closeBtn = document.getElementById('popup-close-btn');
    const confirmBtn = document.getElementById('popup-confirm-btn');

    // 팝업을 보여주는 함수
    function showPopup() {
        if (popupOverlay) {
            popupOverlay.classList.remove('popup-hidden');
            // 팝업이 떴을 때 배경 스크롤을 막습니다.
            document.body.style.overflow = 'hidden'; 
        }
    }

    // 팝업을 숨기는 함수
    function hidePopup() {
        if (popupOverlay) {
            popupOverlay.classList.add('popup-hidden');
            // 팝업이 닫히면 배경 스크롤을 다시 허용합니다.
            document.body.style.overflow = ''; 
        }
    }

    // 처음 페이지가 열렸을 때 팝업을 보여줍니다.
    showPopup();

    // 닫기 버튼들(X 버튼, 하단 버튼)을 클릭하면 팝업을 숨깁니다.
    if (closeBtn) {
        closeBtn.addEventListener('click', hidePopup);
    }
    if (confirmBtn) {
        confirmBtn.addEventListener('click', hidePopup);
    }
});
