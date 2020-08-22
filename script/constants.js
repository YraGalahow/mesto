export const object = {
    formSelector: '#form',
    inputSelector: '#popup-input',
    submitButtonSelector: '#popup-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: '.popup__input_invalid',
    errorClass: 'popup__input-error'
};
export const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const popup = document.querySelector('.popup');
export const popupNewItem = document.querySelector('.popup-new-item');
export const popupItem = document.querySelector('.popup-item');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileAddButton = document.querySelector('.profile__add-button');
export const popupCloseButton = document.querySelector('.popup__close');
export const popupNewItemCloseButton = document.querySelector('.popup-new-item__close');
export const popupItemClose = document.querySelector('.popup-item__close');
export const popupButton = document.querySelector('.popup__button');
export const popupNewItemAddCard = document.querySelector('.popup-new-item__addcard');
export const profileFirstName = document.querySelector('.profile__first-name');
export const profilePosition = document.querySelector('.profile__position');
export const popupFirstName = document.querySelector('.popup__input_first-name');
export const popupPosition = document.querySelector('.popup__input_position');
export const formNewItemElement = document.querySelector('.popup-new-item__container');
export const elementsSection = document.querySelector('.elements');
export const namePlaceValue = document.querySelector('.popup-new-item__input_title');
export const urlPhotoValue = document.querySelector('.popup-new-item__input_url');
export const popupItemImage = document.querySelector('.popup-item__image');
export const popupItemTitle = document.querySelector('.popup-item__title');
export const formElemen = document.querySelector('.popup__container');
export const cardSelector = document.querySelector('#item-template');