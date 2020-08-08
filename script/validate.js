const object = {
    formSelector: '#form',
    inputSelector: '#popup-input',
    submitButtonSelector: '#popup-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: '.popup__input_invalid',
    errorClass: 'popup__input-error'
};

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) => {
    popupFirstName.value = profileFirstName.innerText;
    popupPosition.value = profilePosition.innerText;
    urlPhotoValue.value = "";
    namePlaceValue.value = "";
    const forms = Array.from(document.querySelectorAll(formSelector, ));
    forms.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        return setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
    });
};

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElementi = Array.from(formElement.querySelectorAll(submitButtonSelector));
    const buttonElement = buttonElementi[0];
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (evt) => {
            checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
        checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
    });
};

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputErrorClass, errorClass);
    } else {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
};

const showInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(errorClass);
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    const isFormValid = inputList.some((inputElement) => !inputElement.validity.valid);
    if (!isFormValid) {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.disabled = false;
    } else {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.disabled = true;
    }
};

profileAddButton.addEventListener('click', function(newItemCardOpen) {
    return enableValidation(object)
});

profileEditButton.addEventListener('click', function(profileEditOpen) {
    return enableValidation(object)
});

enableValidation(object);