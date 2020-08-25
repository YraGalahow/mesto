import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { elementsSection, itemTemplateCard, initialCards, validationConfig, formNewItemElement, popupProfile, popupCard, popupNewCard, popupNewItemAddCard, formElemen, popupItemClose, popupNewItemCloseButton, profileAddButton, popupCloseButton, profileEditButton, popupFirstName, popupPosition, profileFirstName, profilePosition, urlPhotoValue, namePlaceValue } from './constants.js';
import { openPopup, closePopup } from './utils.js';

function render() {
    initialCards.forEach(cardData => {
        const card = new Card(cardData, itemTemplateCard);
        const cardElement = card.renderItem();
        elementsSection.prepend(cardElement);
    });
};

render();

function createСard(evt) {
    evt.preventDefault();
    const cardData = {
        link: urlPhotoValue.value,
        name: namePlaceValue.value
    };
    const card = new Card(cardData, itemTemplateCard);
    const cardElement = card.renderItem();
    elementsSection.prepend(cardElement);
    closePopup(popupNewCard);
};

document.addEventListener('click', function(event) {
    if (popupCard.classList.contains('popup_opened') && event.target === popupCard) {
        closePopup(popupCard);
    };
});

function saveProfile(evt) {
    evt.preventDefault();
    profileFirstName.textContent = popupFirstName.value;
    profilePosition.textContent = popupPosition.value;
    closePopup(popupProfile);
};

profileEditButton.addEventListener('click', function(openProfile) {
    popupFirstName.value = profileFirstName.innerText;
    popupPosition.value = profilePosition.innerText;
    openPopup(popupProfile);
});

popupCloseButton.addEventListener('click', function(closeProfile) {
    closePopup(popupProfile);
});

profileAddButton.addEventListener('click', function(openPopupNewItem) {
    urlPhotoValue.value = '';
    namePlaceValue.value = '';
    openPopup(popupNewCard);
    popupNewItemAddCard.disabled = true;
});

popupNewItemCloseButton.addEventListener('click', function(closePopupNewItem) {
    closePopup(popupNewCard);
});

popupItemClose.addEventListener('click', function(closePopupItem) {
    closePopup(popupCard);
});

document.addEventListener('click', function(event) {
    if (popupProfile.classList.contains('popup_opened')) {
        if (event.target === popupProfile) {
            closePopup(popupProfile);
        };
    };
});

document.addEventListener('click', function(event) {
    if (popupNewCard.classList.contains('popup_opened') && event.target === popupNewCard) {
        closePopup(popupNewCard);
    };
});

document.addEventListener('click', function(event) {
    if (popupNewCard.classList.contains('popup_opened') && event.target === popupNewCard) {
        closePopup(popupNewCard);
    };
});

const addFormValidator = new FormValidator(formNewItemElement, validationConfig);
const editFormValidator = new FormValidator(formElemen, validationConfig);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

profileEditButton.addEventListener('click', function(validEdit) {
    const editFormValidator = new FormValidator(formElemen, validationConfig);
    editFormValidator.enableValidation();
});

profileAddButton.addEventListener('click', function(validAdd) {
    const addFormValidator = new FormValidator(formNewItemElement, validationConfig);
    addFormValidator.openValidation();
});

formElemen.addEventListener('submit', saveProfile);
formNewItemElement.addEventListener('submit', createСard);