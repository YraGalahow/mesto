import { validationConfig } from './constants.js';

export class FormValidator {
    constructor(formElement, validationConfig) {
        this._formElement = formElement;
        this._inputSelector = validationConfig.inputSelector;
        this._formSelector = validationConfig.formSelector;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorClass = validationConfig.errorClass;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    };

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners(this._formElement);
    };

    openValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElementi = Array.from(this._formElement.querySelectorAll(this._submitButtonSelector));
        const buttonElement = buttonElementi[0];
        inputList.forEach((inputElement) => {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.disabled = true;
            this._hideInputError(inputElement);
        });
    };

    _setEventListeners(formElement) {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
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
        };
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
        };
    };

};