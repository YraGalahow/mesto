import { popupCard, popupItemImage, popupItemTitle } from './constants.js';
import { closePopup, openPopup } from './utils.js';
export class Card {
    constructor(cardData, itemTemplateCard) {
        this._itemTemplateCard = itemTemplateCard;
        this._name = cardData.name;
        this._link = cardData.link;
    };

    renderItem() {
        const itemTemplate = document.querySelector('#item-template').content;
        this._newElement = itemTemplate.cloneNode(true);
        this._itemTemplateImage = this._newElement.querySelector('.item-template__image');
        this._itemTemplateImage.src = this._link;
        this._newElement.querySelector('.item-template__info-text').textContent = this._name;
        this._setEventListeners();
        return (this._newElement);
    };

    _setEventListeners() {
        this._newElement.querySelector(".item-template__info-like-button").addEventListener('click', function(evt) {
            evt.target.classList.toggle("item-template__info-like-button_active");
        });
        this._newElement.querySelector('.item-template__delete-button').addEventListener('click', function(itm) {
            itm.target.closest('.item-template-card').remove();
        });
        this._itemTemplateImage.addEventListener('click', () => {
            this._handleMessageClick();
        });
    };

    _handleMessageClick() {
        openPopup(popupCard);
        popupItemImage.src = this._link;
        popupItemTitle.textContent = this._name;
    };
};