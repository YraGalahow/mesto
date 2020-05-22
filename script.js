let popup = document.querySelector('.popup');
const popupSubmitButton = document.querySelector('popup__button');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
let profileFirstName = document.querySelector('.profile__first-name');
let profileposition = document.querySelector('.profile__position');
let popupFirstName = document.querySelector('.popup_first-name');
let popupposition = document.querySelector('.popup_position');
let formElement = document.querySelector('.popup__container');

closePopup();

function openPopup() {
    popup.classList.add('popup_opened');
    popupFirstName.value = profileFirstName.innerText;
    popupposition.value = profileposition.innerText;

}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    popupFirstName.value;
    popupposition.value;

    profileFirstName.textContent = popupFirstName.value;
    profileposition.textContent = popupposition.value;

    closePopup()
}

profileEditButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);