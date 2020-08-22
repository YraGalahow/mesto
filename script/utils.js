import { popup, formElemen, popupFirstName, popupPosition, profileFirstName, profilePosition, } from './constants.js'

export function saveProfile(evt) {
    evt.preventDefault();
    profileFirstName.textContent = popupFirstName.value;
    profilePosition.textContent = popupPosition.value;
    const popupClose = popup;
    closePhoto(popupClose)
}

export function openPhoto(popupOpen) {
    popupOpen.classList.add('popup_opened');
    document.addEventListener('keydown', popupEsc);
}

export function closePhoto(popupClose) {
    popupClose.classList.remove('popup_opened');
    document.removeEventListener('keydown', popupEsc);
}

const popupEsc = (evt) => {
    const popupOpened = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        if (popupOpened != undefined) {
            closePhoto(popupOpened);
        }
    };
}