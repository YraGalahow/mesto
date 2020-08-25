export function openPopup(popupOpen) {
    popupOpen.classList.add('popup_opened');
    document.addEventListener('keydown', popupEsc);
};

export function closePopup(popupClose) {
    popupClose.classList.remove('popup_opened');
    document.removeEventListener('keydown', popupEsc);
};

const popupEsc = (evt) => {
    const popupOpened = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        if (popupOpened !== undefined) {
            closePopup(popupOpened);
        };
    };
};