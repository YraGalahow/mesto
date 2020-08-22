import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { popupButton, popup, popupItem, popupNewItem, popupNewItemAddCard, formElemen, popupItemClose, popupNewItemCloseButton, profileAddButton, popupCloseButton, profileEditButton, popupFirstName, popupPosition, profileFirstName, profilePosition, urlPhotoValue, namePlaceValue } from './constants.js'
import { saveProfile, openPhoto, closePhoto } from './utils.js';

document.addEventListener('click', function(event) {
    if (popupItem.classList.contains('popup_opened') && event.target == popupItem) {
        const popupClose = popupItem;
        closePhoto(popupClose)
    }
});

profileEditButton.addEventListener('click', function(openPopup) {
    popupFirstName.value = profileFirstName.innerText;
    popupPosition.value = profilePosition.innerText;
    const popupOpen = popup;
    openPhoto(popupOpen)
});

popupCloseButton.addEventListener('click', function(closePopup) {
    const popupClose = popup;
    closePhoto(popupClose)
});

profileAddButton.addEventListener('click', function(openPopupNewItem) {
    urlPhotoValue.value = "";
    namePlaceValue.value = "";
    const popupOpen = popupNewItem;
    openPhoto(popupOpen)
    popupNewItemAddCard.disabled = true;
});

popupNewItemCloseButton.addEventListener('click', function(closePopupNewItem) {
    const popupClose = popupNewItem;
    closePhoto(popupClose)
});

popupItemClose.addEventListener('click', function(closePopupItem) {
    const popupClose = popupItem;
    closePhoto(popupClose)
});

document.addEventListener('click', function(event) {
    if (popup.classList.contains('popup_opened') && event.target == popupButton) {
        saveProfile;
    }
    if (popup.classList.contains('popup_opened')) {
        if (event.target == popup) {
            const popupClose = popup;
            closePhoto(popupClose)
        }
    }
});

formElemen.addEventListener('submit', saveProfile);