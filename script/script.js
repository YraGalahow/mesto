const initialCards = [{
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





const popup = document.querySelector('.popup');

const popupNewItem = document.querySelector('.popup-new-item');
const popupItem = document.querySelector('.popup-item');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupCloseButton = document.querySelector('.popup__close');
const popupNewItemCloseButton = document.querySelector('.popup-new-item__close');
const popupItemClose = document.querySelector('.popup-item__close');
const popupButton = document.querySelector('.popup__button');
const popupNewItemAddCard = document.querySelector('.popup-new-item__addcard');


const profileFirstName = document.querySelector('.profile__first-name');
const profilePosition = document.querySelector('.profile__position');
const popupFirstName = document.querySelector('.popup__input_first-name');
const popupPosition = document.querySelector('.popup__input_position');

const formNewItemElement = document.querySelector('.popup-new-item__container');
const elementsSection = document.querySelector('.elements');
const namePlaceValue = document.querySelector('.popup-new-item__input_title');
const urlPhotoValue = document.querySelector('.popup-new-item__input_url');
const popupItemImage = document.querySelector('.popup-item__image');
const popupItemTitle = document.querySelector('.popup-item__title');



const formElemen = document.querySelector('.popup__container');


function openClose() {

    profileEditButton.addEventListener('click', function(openPopup) {
        popupFirstName.value = profileFirstName.innerText;
        popupPosition.value = profilePosition.innerText;
        popup.classList.toggle('popup_opened');


    });
    popupCloseButton.addEventListener('click', function(closePopup) {
        popup.classList.toggle('popup_opened');

    });

    profileAddButton.addEventListener('click', function(openPopupNewItem) {
        urlPhotoValue.value = "";
        namePlaceValue.value = "";
        popupNewItem.classList.toggle('popup_opened');
    });
    popupNewItemCloseButton.addEventListener('click', function(closePopupNewItem) {
        popupNewItem.classList.toggle('popup_opened');
    });
    popupItemClose.addEventListener('click', function(closePopupItem) {
        popupItem.classList.toggle('popup_opened');
    });
    document.addEventListener('keydown', function(closePopupEsc) {
        if (event.key === "Escape") {
            popup.classList.remove('popup_opened');
        }
    });
    document.addEventListener('keydown', function(closePopupNewItemEsc) {
        if (event.key === "Escape") {
            popupNewItem.classList.remove('popup_opened');
        }
    });
    document.addEventListener('keydown', function(closePopupItemEsc) {
        if (event.key === "Escape") {
            popupItem.classList.remove('popup_opened');
        }
    });
    document.addEventListener('click', function(event) {
        if (popup.classList.contains('popup_opened') && event.target == popupButton) {
            saveProfile;
        }
        if (popup.classList.contains('popup_opened')) {
            if (event.target == popup) {
                popup.classList.remove('popup_opened');
            }
        }
    });
    document.addEventListener('click', function(event) {
        if (popupNewItem.classList.contains('popup_opened')) {
            if (event.target == popupNewItemAddCard) {
                createСard;
            }
        }
        if (popupNewItem.classList.contains('popup_opened') && event.target == popupNewItem) {
            popupNewItem.classList.remove('popup_opened');
        }
    });
    document.addEventListener('click', function(event) {
        if (popupItem.classList.contains('popup_opened') && event.target == popupItem) {
            popupItem.classList.remove('popup_opened');
        }
    });


}
openClose();



function saveProfile(evt) {
    evt.preventDefault();

    profileFirstName.textContent = popupFirstName.value;
    profilePosition.textContent = popupPosition.value;
    popup.classList.remove('popup_opened');


}

function renderItem(item) {

    const itemTemplate = document.querySelector('#item-template').content;
    const newElement = itemTemplate.cloneNode(true);

    newElement.querySelector('.item-template__image').src = item.link;
    newElement.querySelector('.item-template__info-text').textContent = item.name;

    newElement.querySelector(".item-template__info-like-button").addEventListener('click', function(evt) {
        evt.target.classList.toggle("item-template__info-like-button_active");
    });

    newElement.querySelector(".item-template__delete-button").addEventListener('click', function(itm) {
        itm.target.closest('.item-template-card').remove();

    });

    newElement.querySelector('.item-template__image').addEventListener('click', function() {

        popupItem.classList.toggle('popup_opened');
        popupItemImage.src = item.link;
        popupItemTitle.textContent = item.name;

    });

    elementsSection.prepend(newElement);

}

function render() {
    initialCards.forEach(renderItem);

}

render();

function createСard(evt) {
    evt.preventDefault();
    const copyItem = {
        name: "",
        link: "",
    };
    copyItem.link = urlPhotoValue.value;
    copyItem.name = namePlaceValue.value;
    renderItem(copyItem);
    popupNewItem.classList.toggle('popup_opened');
}

formElemen.addEventListener('submit', saveProfile);

formNewItemElement.addEventListener('submit', createСard);