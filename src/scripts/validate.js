/*********************************************
Validation begins.
**********************************************/
//Use function because didn't finish Sprint 7 yet
//even though there is only one input, still use forEach to make it accessable.

//make an object for functions
const config = {
  form: ".suggest__form",
  input: ".suggest__input",
  submitButton: ".suggest__submit-button",
  errorClass: "suggest__error_show",
  inputInvalidClass: "suggest__input_invalid",
};
//make universal functions for buttons
const disableButton = function (button) {
  button.disabled = true;
};
const enableButton = function (button) {
  button.disabled = false;
};
//function to show error
const showError = function (form, input, { errorClass, inputInvalidClass }) {
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.classList.add(errorClass);
  input.classList.add(inputInvalidClass);
  console.log(input);
  errorMessage.textContent = input.validationMessage;
};
//function to hide error
const hideError = function (form, input, { errorClass, inputInvalidClass }) {
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.classList.remove(errorClass);
  input.classList.remove(inputInvalidClass);
};
//function to confirm if input is valid or not
const confirmInputValid = function (form, input, options) {
  if (!input.validity.valid) {
    showError(form, input, options);
  } else {
    hideError(form, input, options);
  }
};
const toggleButtonAbility = function (inputs, submitButton) {
  let inValid = false;
  inputs.forEach((input) => {
    if (!input.validity.valid) {
      inValid = true;
    }
  });
  if (inValid) {
    disableButton(submitButton);
  } else {
    enableButton(submitButton);
  }
};
//function for event listeners
const setEventListeners = function (form, options) {
  const { input, submitButton } = options;
  const inputElements = [...form.querySelectorAll(input)];
  const submitButtonElement = form.querySelector(submitButton);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (evt) => {
      confirmInputValid(form, inputElement, options);
      toggleButtonAbility(inputElements, submitButtonElement);
    });
  });
};
const enableValidation = function (options) {
  //select forms
  const formElements = [...document.querySelectorAll(options.form)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      formElement.reset();
      disableButton(evt.target.querySelector(options.submitButton));
    });
    setEventListeners(formElement, options);
  });
};

//call the validation function at the end.

enableValidation(config);
/*********************************************
Validation ends
**********************************************/
