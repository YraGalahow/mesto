import { popupNewItemAddCard, initialCards, popupNewItem, popupItem, formNewItemElement, elementsSection, namePlaceValue, urlPhotoValue, popupItemImage, popupItemTitle } from './constants.js'
import { closePhoto, openPhoto } from './utils.js';

export class Card {
    constructor(copyItem) {
        this._name = copyItem.name;
        this._link = copyItem.link;
    }

    renderItem() {
        const itemTemplate = document.querySelector('#item-template').content;
        this._newElement = itemTemplate.cloneNode(true);
        this._itemTemplateImage = this._newElement.querySelector('.item-template__image');
        this._itemTemplateImage.src = this._link;
        this._newElement.querySelector('.item-template__info-text').textContent = this._name;
        this._newElement.querySelector(".item-template__info-like-button").addEventListener('click', function(evt) {
            evt.target.classList.toggle("item-template__info-like-button_active");
        });
        this._newElement.querySelector(".item-template__delete-button").addEventListener('click', function(itm) {
            itm.target.closest('.item-template-card').remove();
        });
        this._setEventListeners();
        return (this._newElement);
    }
    _setEventListeners() {
        this._itemTemplateImage.addEventListener('click', () => {
            this._handleMessageClick();
        });
    };
    _handleMessageClick() {
        const popupOpen = popupItem;
        openPhoto(popupOpen)
        popupItemImage.src = this._link;
        popupItemTitle.textContent = this._name;
    }
}

function render() {
    initialCards.forEach(copyItem => {
        const card = new Card(copyItem, ".item-template-card");
        const cardElement = card.renderItem();
        elementsSection.prepend(cardElement);
    });
}
render();

function createСard(evt) {
    evt.preventDefault();
    const copyItem = {
        link: urlPhotoValue.value,
        name: namePlaceValue.value
    };
    const card = new Card(copyItem, ".item-template-card");
    const cardElement = card.renderItem();
    elementsSection.prepend(cardElement);
    const popupClose = popupNewItem;
    closePhoto(popupClose)
}

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
formNewItemElement.addEventListener('submit', createСard);