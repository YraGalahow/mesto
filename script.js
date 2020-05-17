let popup = document.querySelector('.popup');
let popupSubmitButton = document.querySelector('popup__button');
let profileEditButton = document.querySelector('.profile__Edit-button');
let popupCloseButton = document.querySelector('.popup__close');
let profileFirstName = document.querySelector('.profile__First-Name');
let profileposition = document.querySelector('.profile__position');
let popupFirstName = document.querySelector('.popup__First-Name');
let popupposition = document.querySelector('.popup__position');
let formElement = document.querySelector('.popup__container');
closePopup();

function openPopup() {
    popupFirstName.value = profileFirstName.innerText;
    popupposition.value = profileposition.innerText;
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
    popupFirstName.value = profileFirstName.innerText;
    popupposition.value = profileposition.innerText;

}

function formSubmitHandler(evt) {
    evt.preventDefault();

    let nameInput = document.querySelector('.popup__First-Name');
    let jobInput = document.querySelector('.popup__position');

    nameInput.value;
    jobInput.value;

    let profileFirstName = document.querySelector('.profile__First-Name');
    let profileposition = document.querySelector('.profile__position');


    profileFirstName.textContent = nameInput.value;
    profileposition.textContent = jobInput.value;

    popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);