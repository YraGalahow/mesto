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

const popupSubmitButton = document.querySelector('popup__button');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupNewItemAddCard = document.querySelector('.popup-new-item__addcard');
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
const itemTemplate = document.querySelector('#item-template').content;

function openPopup() {
    popup.classList.add('popup_opened');
    popupFirstName.value = profileFirstName.innerText;
    popupPosition.value = profilePosition.innerText;

}

function openPopupNewItem() {
    popupNewItem.classList.add('popup_opened');
    urlPhotoValue.value = "";
    namePlaceValue.value = "";
}


function openPhoto() {
    popupItem.classList.add('popup_opened');
}

function closePhoto() {
    popupItem.classList.remove('popup_opened');
}

function closePopupNewItem() {
    popupNewItem.classList.remove('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandle(evt) {
    evt.preventDefault();

    profileFirstName.textContent = popupFirstName.value;
    profilePosition.textContent = popupPosition.value;

    closePopup()
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
        openPhoto();
        popupItemImage.src = item.link;
        popupItemTitle.textContent = item.name;

    });

    elementsSection.prepend(newElement);

}

function render() {
    initialCards.forEach(renderItem);

}

render();

function formSubmitHandler(evt) {
    evt.preventDefault();
    let copyItem = {
        name: "",
        link: "",
    };
    copyItem.link = urlPhotoValue.value;
    copyItem.name = namePlaceValue.value;
    renderItem(copyItem);
    closePopupNewItem();
}

profileEditButton.addEventListener('click', openPopup);

profileAddButton.addEventListener('click', openPopupNewItem);

popupItemClose.addEventListener('click', closePhoto);

popupCloseButton.addEventListener('click', closePopup);

popupNewItemCloseButton.addEventListener('click', closePopupNewItem);

formElement.addEventListener('submit', formSubmitHandle);

formNewItemElement.addEventListener('submit', formSubmitHandler);