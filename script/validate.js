const enableValidation = function() {
    popupFirstName.value = profileFirstName.innerText;
    popupPosition.value = profilePosition.innerText;
    urlPhotoValue.value = "";
    namePlaceValue.value = "";
    const forms = Array.from(document.querySelectorAll('#form'));
    console.log(forms);

    forms.forEach((formElement) => {


        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();

        });


        return setEventListeners(formElement);
    });
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('#popup-input'));

    const buttonElement = Array.from(formElement.querySelectorAll('#popup-button'));

    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (evt) => {

            checkInputValidity(formElement, inputElement);

            toggleButtonState(inputList, buttonElement);
        });

    });
};

const checkInputValidity = (formElement, inputElement) => {


    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement);

    } else {
        hideInputError(formElement, inputElement);

    }
};

const showInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.add('.popup__input_invalid');
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add('.popup__input-error');

};


const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.remove('.popup__input_invalid');

    errorElement.textContent = "";
    errorElement.classList.remove('.popup__input-error');
};

const toggleButtonState = (inputList, buttonElement) => {

    const isFormValid = inputList.some((inputElement) => !inputElement.validity.valid);
    console.log(inputList)

    if (!isFormValid) {
        console.log(isFormValid)

        buttonElement[0].classList.remove('popup__button_disabled');
        buttonElement[0].disabled = false;

    } else {
        console.log(isFormValid)
        buttonElement[0].classList.add('popup__button_disabled');
        buttonElement[0].disabled = true;

    }


};
enableValidation();