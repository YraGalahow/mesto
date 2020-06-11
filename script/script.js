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

let popup = document.querySelector('.popup');
let popupNewItem = document.querySelector('.popup-new-item');
let popupItem = document.querySelector('.popup-item');

const popupSubmitButton = document.querySelector('popup__button');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupNewItemAddCard = document.querySelector('.popup-new-item__addcard');
const popupCloseButton = document.querySelector('.popup__close');
const popupNewItemCloseButton = document.querySelector('.popup-new-item__close');
const popupItemClose = document.querySelector('.popup-item__close');


let profileFirstName = document.querySelector('.profile__first-name');
let profilePosition = document.querySelector('.profile__position');
let popupFirstName = document.querySelector('.popup__input_first-name');
let popupPosition = document.querySelector('.popup__input_position');
let formElement = document.querySelector('.popup__container');
let formNewItemElement = document.querySelector('.popup-new-item__container');
const elementsSection = document.querySelector('.elements');
let namePlaceValue = document.querySelector('.popup-new-item__input_title');
let urlPhotoValue = document.querySelector('.popup-new-item__input_url');
let popupItemImage = document.querySelector('.popup-item__image');
let popupItemTitle = document.querySelector('.popup-item__title');
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

initialCards.forEach(function(item) {
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
});


function formSubmitHandler(evt) {
    evt.preventDefault();
    let Item = {
        name: "",
        link: "",
    };
    Item.link = urlPhotoValue.value;
    Item.name = namePlaceValue.value;


    initialCards.unshift(Item);

    const itemTemplate = document.querySelector('#item-template').content;

    const newElement = itemTemplate.cloneNode(true);
    newElement.querySelector('.item-template__image').src = initialCards[0].link;
    newElement.querySelector('.item-template__info-text').textContent = initialCards[0].name;
    newElement.querySelector(".item-template__info-like-button").addEventListener('click', function(evt) {
        evt.target.classList.toggle("item-template__info-like-button_active");
    });

    newElement.querySelector(".item-template__delete-button").addEventListener('click', function(itm) {
        itm.target.closest('.item-template-card').remove();
    });

    newElement.querySelector('.item-template__image').addEventListener('click', function() {
        openPhoto();
        popupItemImage.src = Item.link;
        popupItemTitle.textContent = Item.name;
    });

    closePopupNewItem();

    elementsSection.prepend(newElement);
}

profileEditButton.addEventListener('click', openPopup);

profileAddButton.addEventListener('click', openPopupNewItem);

popupItemClose.addEventListener('click', closePhoto);

popupCloseButton.addEventListener('click', closePopup);

popupNewItemCloseButton.addEventListener('click', closePopupNewItem);

formElement.addEventListener('submit', formSubmitHandle);

formNewItemElement.addEventListener('submit', formSubmitHandler);