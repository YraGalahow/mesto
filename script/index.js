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

function openPhoto(popupOpen) {
    popupOpen.classList.add('popup_opened');
    document.addEventListener('keydown', popupEsc);
}

function closePhoto(popupClose) {
    popupClose.classList.remove('popup_opened');
    document.removeEventListener('keydown', popupEsc);
}

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


const popupEsc = (evt) => {
    const popupOpened = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        if (popupOpened != undefined) {
            closePhoto(popupOpened);
        }
    };
}


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

document.addEventListener('click', function(event) {
    if (popupNewItem.classList.contains('popup_opened')) {
        if (event.target == popupNewItemAddCard) {
            createСard;
        }
    }
    if (popupNewItem.classList.contains('popup_opened') && event.target == popupNewItem) {
        const popupClose = popupNewItem;
        closePhoto(popupClose)
    }
});

document.addEventListener('click', function(event) {
    if (popupItem.classList.contains('popup_opened') && event.target == popupItem) {
        const popupClose = popupItem;
        closePhoto(popupClose)
    }
});

function saveProfile(evt) {
    evt.preventDefault();

    profileFirstName.textContent = popupFirstName.value;
    profilePosition.textContent = popupPosition.value;
    const popupClose = popup;
    closePhoto(popupClose)
}

function renderItem(copyItem) {
    const itemTemplate = document.querySelector('#item-template').content;
    const newElement = itemTemplate.cloneNode(true);
    const itemTemplateImage = newElement.querySelector('.item-template__image');
    itemTemplateImage.src = copyItem.link;
    newElement.querySelector('.item-template__info-text').textContent = copyItem.name;
    newElement.querySelector(".item-template__info-like-button").addEventListener('click', function(evt) {
        evt.target.classList.toggle("item-template__info-like-button_active");
    });

    newElement.querySelector(".item-template__delete-button").addEventListener('click', function(itm) {
        itm.target.closest('.item-template-card').remove();
    });
    itemTemplateImage.addEventListener('click', function() {
        const popupOpen = popupItem;
        openPhoto(popupOpen)
        popupItemImage.src = copyItem.link;
        popupItemTitle.textContent = copyItem.name;
    });

    return newElement;
}

function addCard(newElement) {
    elementsSection.prepend(newElement);
}

function render() {
    initialCards.forEach(copyItem => {
        const newElement = renderItem(copyItem);
        addCard(newElement, elementsSection);
    });
}

render();

function createСard(evt) {

    evt.preventDefault();
    const copyItem = {
        link: urlPhotoValue.value,
        name: namePlaceValue.value

    };
    addCard(renderItem(copyItem));
    const popupClose = popupNewItem;
    closePhoto(popupClose)

}


formElemen.addEventListener('submit', saveProfile);
formNewItemElement.addEventListener('submit', createСard);