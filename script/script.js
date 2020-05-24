<<<<<<< HEAD:script/script.js
let popup = document.querySelector('.popup');
const popupSubmitButton = document.querySelector('popup__button');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
let profileFirstName = document.querySelector('.profile__first-name');
let profilePosition = document.querySelector('.profile__position');
let popupFirstName = document.querySelector('.popup__input_first-name');
let popupPosition = document.querySelector('.popup__input_position');
let formElement = document.querySelector('.popup__container');

closePopup();

function openPopup() {
    popup.classList.add('popup_opened');
    popupFirstName.value = profileFirstName.innerText;
    popupPosition.value = profilePosition.innerText;

}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileFirstName.textContent = popupFirstName.value;
    profilePosition.textContent = popupPosition.value;

    closePopup()
}

profileEditButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

=======
let popup = document.querySelector('.popup');
const popupSubmitButton = document.querySelector('popup__button');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
let profileFirstName = document.querySelector('.profile__first-name');
let profilePosition = document.querySelector('.profile__position');
let popupFirstName = document.querySelector('.popup__input_first-name');
let popupPosition = document.querySelector('.popup__input_position');
let formElement = document.querySelector('.popup__container');

closePopup();

function openPopup() {
    popup.classList.add('popup_opened');
    popupFirstName.value = profileFirstName.innerText;
    popupPosition.value = profilePosition.innerText;

}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileFirstName.textContent = popupFirstName.value;
    profilePosition.textContent = popupPosition.value;

    closePopup()
}

profileEditButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

>>>>>>> b982c873a5a195c113fd81d9fae5eb6be938a40c:script.js
formElement.addEventListener('submit', formSubmitHandler);