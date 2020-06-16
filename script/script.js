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


const profileFirstName = document.querySelector('.profile__first-name');
const profilePosition = document.querySelector('.profile__position');
const popupFirstName = document.querySelector('.popup__input_first-name');
const popupPosition = document.querySelector('.popup__input_position');
const formElement = document.querySelector('.popup__container');
const formNewItemElement = document.querySelector('.popup-new-item__container');
const elementsSection = document.querySelector('.elements');
const namePlaceValue = document.querySelector('.popup-new-item__input_title');
const urlPhotoValue = document.querySelector('.popup-new-item__input_url');
const popupItemImage = document.querySelector('.popup-item__image');
const popupItemTitle = document.querySelector('.popup-item__title');

function openClose(popup, popupNewItem, popupItem) {
    popupFirstName.value = profileFirstName.innerText;
    popupPosition.value = profilePosition.innerText;
    popup.classList.toggle('popup_opened');

    popupNewItem.classList.toggle('popup_opened');

    popupItem.classList.toggle('popup_opened');

}

function saveProfile(evt) {
    evt.preventDefault();

    profileFirstName.textContent = popupFirstName.value;
    profilePosition.textContent = popupPosition.value;
    popup.classList.toggle('popup_opened');
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

profileEditButton.addEventListener('click', () => { openClose(popup); })

profileAddButton.addEventListener('click', () => { openClose(popupNewItem); })

popupItemClose.addEventListener('click', () => { openClose(popupItem); })

popupCloseButton.addEventListener('click', () => { openClose(popup); })

popupNewItemCloseButton.addEventListener('click', () => { openClose(popupNewItem); })

formElement.addEventListener('submit', saveProfile);

formNewItemElement.addEventListener('submit', createСard);