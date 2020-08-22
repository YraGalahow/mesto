import { object, profileAddButton, profileEditButton, popupFirstName, popupPosition, profileFirstName, profilePosition, urlPhotoValue, namePlaceValue, formNewItemElement, formElemen } from './constants.js'
export class FormValidator {
    constructor(formElement, object) {
        this._formElement = formElement;
        this._inputSelector = object.inputSelector;
        this._formSelector = object.formSelector;
        this._inputErrorClass = object.inputErrorClass;
        this._errorClass = object.errorClass;
        this._submitButtonSelector = object.submitButtonSelector;
        this._inactiveButtonClass = object.inactiveButtonClass;
    }


    enableValidation() {
        popupFirstName.value = profileFirstName.innerText;
        popupPosition.value = profilePosition.innerText;
        urlPhotoValue.value = "";
        namePlaceValue.value = "";
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners(this._formElement);
    };


    _setEventListeners(formElement) {
        const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
        const buttonElementi = Array.from(this._formElement.querySelectorAll(this._submitButtonSelector));
        const buttonElement = buttonElementi[0];
        this._toggleButtonState(buttonElement, inputList);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', (evt) => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(buttonElement, inputList);
            });
            this._checkInputValidity(inputElement);
        });
    };

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
    };

    _toggleButtonState(buttonElement, inputList) {
        const isFormValid = inputList.some((inputElement) => !inputElement.validity.valid);
        if (!isFormValid) {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.disabled = false;
        } else {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.disabled = true;
        }
    };
}

profileAddButton.addEventListener('click', function(newItemCardOpen) {
    const formElement = formNewItemElement;
    const editFormValidator = new FormValidator(formElement, object);
    const addFormValidator = new FormValidator(formElement, object);
    editFormValidator.enableValidation();
    addFormValidator.enableValidation();

});

profileEditButton.addEventListener('click', function(profileEditOpen) {
    const formElement = formElemen;
    const editFormValidator = new FormValidator(formElement, object);
    const addFormValidator = new FormValidator(formElement, object);
    editFormValidator.enableValidation();
    addFormValidator.enableValidation();
});